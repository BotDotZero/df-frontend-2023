import React, { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import Modal from './components/Modal';
import Table from './components/Table';
import Paginate from './components/Pagination';

function App() {
  // Data
  const [books, setBooks] = useState([
    { id: 1, name: "Refactoring", author: "Martin Fowler", topic: "Programming" },
    {
      id: 2,
      name: "Designing Data-Intensve Applications",
      author: "Martin Kleppmann",
      topic: "Database",
    },
    { id: 3, name: "The Phoenix Project", author: "Gene Kim", topic: "DevOps" },
  ]);

  // Search
  const [searchValue, setSearchValue] = useState("");

  function search(data) {
    return data.filter((book) => {
      return book.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    });
  }

  // Modal
  const [isShow, setIsShow] = useState(false);
  const [typeModal, setTypeModal] = useState(1); // 0: add, 1: delete
  const [delData, setDelData] = useState({});

  function showModal(options, modalData) {
    setDelData(modalData);
    setTypeModal(options);
    setIsShow(true);
  }
  function closeModal() {
    setIsShow(false);
  }

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(5);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = search(books).slice(indexOfFirstBook, indexOfLastBook);

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

  // Action function

  interface Ibook {
    id: number,
    name: string,
    author: string,
    topic: string
  }
  function createNewBook(id: number, name: string, author: string, topic: string): Ibook {
    return { id, name, author, topic };
  }
  function addBook(bookAdd) {
    const lastId = Math.max(...books.map((e) => e.id)) + 1;
    const newBook = createNewBook(lastId, bookAdd.name, bookAdd.author, bookAdd.topic);
    setBooks([...books, newBook]);
    closeModal();
    if (currentBooks.length === booksPerPage) {
      setCurrentPage(currentPage + 1);
    }
  }

  function delBook() {
    const newBooks = books.filter((book) => book.id !== delData["id"]);
    setBooks(newBooks);
    closeModal();
    if (currentBooks.length === 1 && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  // Theme
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    if (isDark) {
      document.documentElement.getElementsByClassName('ball')[0].classList.add('move')
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.getElementsByClassName('ball')[0].classList.remove('move')
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [isDark]);

  // Render
  return (
    <div className="App">
      <header className="App-header">
        <Navbar isDark={isDark} setIsDark={setIsDark} />
      </header>
      <main className="container">
        <div className="action-bar">
          <input id="searchArea" type="text" placeholder="Search books" onKeyUp={(e) => setSearchValue((e.target as HTMLInputElement).value)} />
          <button id="addBtn" className="btn btn-success" onClick={() => showModal(0, {})}> Add book </button>
        </div>
        <Modal isShow={isShow} typeModal={typeModal} closeModal={() => closeModal()} addBook={(book) => addBook(book)} delBook={() => delBook()} delData={delData} />
        <Table books={currentBooks} booksPerPage={booksPerPage} showModal={(options, modalData) => showModal(options, modalData)} />
        <Paginate booksPerPage={booksPerPage} totalBooks={search(books).length} currentPage={currentPage} paginate={paginate} previousPage={previousPage} nextPage={nextPage} />
      </main>
    </div>
  );
}

export default App;
