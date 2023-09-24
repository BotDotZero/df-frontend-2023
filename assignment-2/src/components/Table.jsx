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
   if (data == null || data.length === 0) {
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

function Table() {
   return (
      <table>
         <thead>
            <tr>
               <th> Name </th>
               <th> Author </th>
               <th> Topic </th>
               <th> Action </th>
            </tr>
         </thead>
         <tbody id="booksTableBody">

         </tbody>
      </table>
   );
}
export default Table;

loadBooks();
fillTable(books);