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

/* *********** AUTO FUNCTION *********** */

var loadBooks = () => {
  var booksData = JSON.parse(localStorage.getItem("books"));
  if (booksData == null) {
    localStorage.setItem("books", JSON.stringify(books));
  } else {
    books = booksData;
  }
}

var tableContent = document.getElementById("booksTableBody");

var fillTable = (data) => {
  tableContent.innerHTML = "";
  if (data == null || data.length == 0) {
    tableContent.innerHTML = "<tr><td style='text-align: center' colspan='4'>No data found</td></tr>";
  } else {
    data.forEach((book) => {
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
      btn.setAttribute("onclick", "openDelModal(" + book.id + ", '" + book.name + "')");
      action.appendChild(btn);

      row.appendChild(name);
      row.appendChild(author);
      row.appendChild(topic);
      row.appendChild(action);
      tableContent.appendChild(row);
    });
  }
}

var addBook = (newBook) => {
  var lastId = Math.max(...books.map((e) => e.id));
  newBook.id = lastId + 1;
  books.push(newBook);
  localStorage.setItem("books", JSON.stringify(books));
  fillTable(books);
  addBookModal.style.display = "none";
}

var delBook = (id) => {
  loadBooks();
  books = books.filter((book) => book.id != id);
  localStorage.setItem("books", JSON.stringify(books));
  fillTable(books);

};
// Search function
var search = document.getElementById("searchArea");
search.addEventListener("keyup", () => {
  var searchValue = search.value.toLowerCase();
  var searchResult = books.filter((book) => {
    return (
      book.name.toLowerCase().includes(searchValue) ||
      book.author.toLowerCase().includes(searchValue) ||
      book.topic.toLowerCase().includes(searchValue)
    );
  });
  fillTable(searchResult);
});

/* *********** ACTION FUNCTION *********** */

var createBookBtn = document.getElementById("createBookBtn");
var newBookFrm = document.getElementById("newBookFrm");

newBookFrm.addEventListener("submit", () => {
  addBook({
    'name': document.getElementById('newBookFrm__name').value,
    'author': document.getElementById('newBookFrm__author').value,
    'topic': document.getElementById('newBookFrm__topic').value
  })
  newBookFrm.reset();
});

/* *********** START FUNCTION *********** */

loadBooks();
fillTable(books);

/* ************************************** */


/* *********** MODAL *********** */
var addBookModal = document.getElementById("addBookModal");
var delCfmModal = document.getElementById("delCfmModal");

var addBtn = document.getElementById("addBtn");
var delBtns = document.getElementsByClassName("delBtn");

addBtn.onclick = function () {
  addBookModal.style.display = "block";
}

var cfmBtn = document.getElementById("delCfmBtn");
cfmBtn.onclick = function () {
  delBook(this.getAttribute('data-id'));
  delCfmModal.style.display = "none";
}
var openDelModal = (id, name) => {
  delCfmModal.style.display = "block";
  document.getElementById('delBookName').innerHTML = name;
  cfmBtn.setAttribute('data-id', id);
}


var closeBtn = document.getElementsByClassName("modal__cancel");
// Click [x] or Cancel to close modal
for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].onclick = function () {
    addBookModal.style.display = "none";
    delCfmModal.style.display = "none";
  }
}
// Click outside modal to close
window.onclick = function (event) {
  if (event.target == addBookModal || event.target == delCfmModal) {
    addBookModal.style.display = "none";
    delCfmModal.style.display = "none";
  }
}
