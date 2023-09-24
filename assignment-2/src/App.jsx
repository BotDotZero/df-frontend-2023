import React, { useState } from 'react';


import Navbar from './components/Navbar';
import Table from './components/Table';


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

  function addBook() {
    const name = "test";
    const author = "test1";
    const topic = "test2";
    const newBook = { name: name, author: author, topic: topic };
    setBooks([...books, newBook]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main className="container">
        <div className="action-bar">
          <input id="searchArea" type="text" placeholder="Search books" />
          <button id="addBtn" className="btn btn-success" onClick={addBook}> Add book </button>
        </div>
        <Table books={books} />
      </main>
    </div>
  );
}

export default App;
