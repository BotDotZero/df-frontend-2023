import React, { useState } from 'react';


import Navbar from './components/Navbar';
import Modal from './components/Modal';
import Table from './components/Table';
import Paginate from './components/Pagination';

function App() {
  const [books, setBooks] = useState([
    { id: 1, name: "Refactoring", author: "Martin Fowler", topic: "Programming" },
    {
      id: 2,
      name: "Designing Data-Intensve Applications",
      author: "Martin Kleppmann",
      topic: "Database",
    },
    { id: 3, name: "The Phoenix Project", author: "Gene Kim", topic: "DevOps" }
  ]);

  // Modal
  const [isShow, setIsShow] = useState(false);
  const [typeModal, setTypeModal] = useState(1); // 0: add, 1: delete
  const [delData, setDelData] = useState({});

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(5);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(books.length / booksPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  // Function
  function showModal(options, data) {
    setDelData(data);
    setTypeModal(options);
    setIsShow(true);
  }
  function closeModal() {
    setIsShow(false);
  }

  function search() {
    const searchArea = document.getElementById("searchArea");
    const filter = searchArea.value.toUpperCase();
    const booksTableBody = document.getElementById("booksTableBody");
    const tr = booksTableBody.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
      const td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        const txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        }
        else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  function addBook(data) {
    let lastId = Math.max(...books.map((e) => e.id)) + 1;
    const newBook = { id: lastId, name: data.name, author: data.author, topic: data.topic };
    setBooks([...books, newBook]);
    closeModal();
    if (currentBooks.length === booksPerPage) {
      setCurrentPage(currentPage + 1);
    }
  }

  function delBook() {
    const newBooks = books.filter((book) => book.id !== delData.id);
    setBooks(newBooks);
    closeModal();
    if (currentBooks.length === 1 && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  console.log(currentBooks, currentPage);
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main className="container">
        <div className="action-bar">
          <input id="searchArea" type="text" placeholder="Search books" onKeyUp={search} />
          <button id="addBtn" className="btn btn-success" onClick={() => showModal(0, "")}> Add book </button>
        </div>
        <Modal isShow={isShow} typeModal={typeModal} closeModal={closeModal} addBook={addBook} delBook={delBook} delData={delData} />
        <Table books={currentBooks} showModal={showModal} />
        <Paginate booksPerPage={booksPerPage} totalBooks={books.length} currentPage={currentPage} paginate={paginate} previousPage={previousPage} nextPage={nextPage} />
      </main>
    </div>
  );
}

export default App;
