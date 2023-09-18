var books = [
  { id: 1, name: "Refactoring", author: "Martin Fowler", topic: "Programming" },
  {
    id: 2,
    name: "Designing Data-Intensve Applications",
    author: "Martin Kleppmann",
    topic: "Database",
  },
  { id: 3, name: "The Phoenix Project", author: "Gene Kim", topic: "DevOps" },
];

// Auto function
var loadBooks = () => {
  var booksData = JSON.parse(localStorage.getItem("books"));
  if (booksData == null) {
    localStorage.setItem("books", JSON.stringify(books));
  } else {
    books = booksData;
  }
}

var tableContent = document.getElementById("booksTableBody");

var fillTable = () => {
  tableContent.innerHTML = "";
  books.forEach((book) => {
    var row = document.createElement("tr");
    row.setAttribute("id", "book" + book.id);
    var name = document.createElement("td");
    name.innerHTML = book.name;
    var author = document.createElement("td");
    author.innerHTML = book.author;
    var topic = document.createElement("td");
    topic.innerHTML = book.topic;
    var action = document.createElement("td");
    var btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.setAttribute("class", "btn btn-danger");
    btn.setAttribute("onclick", "delBook(" + book.id + ")");
    action.appendChild(btn);

    row.appendChild(name);
    row.appendChild(author);
    row.appendChild(topic);
    row.appendChild(action);
    tableContent.appendChild(row);
  });
}

var addBook = (newBook) => {
  var lastId = Math.max(...books.map((e) => e.id));
  newBook.id = lastId + 1;
  books.push(newBook);
  localStorage.setItem("books", JSON.stringify(books));
  fillTable();
}

var delBook = (id) => {
  if (confirm("Are you sure to delete this book?")) {

    loadBooks();
    books = books.filter((book) => book.id != id);
    localStorage.setItem("books", JSON.stringify(books));
    fillTable();
  }
};

// Action function

var createBookBtn = document.getElementById("createBookBtn");
var newBookFrm = document.getElementById("newBookFrm");

createBookBtn.addEventListener("click", () => {
  !newBookFrm.checkValidity()
    ? alert("Please fill all fields!")
    : addBook({ 'name': document.getElementById('newBookFrm__name').value, 'author': document.getElementById('newBookFrm__author').value, 'topic': document.getElementById('newBookFrm__topic').value }), newBookFrm.reset();
});

/* *********** START FUNCTION *********** */

loadBooks();
fillTable();

