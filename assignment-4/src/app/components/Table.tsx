import React from 'react'
import Link from 'next/link'

function fillTable(row) {
  const table: unknown[] = []
  for (let i = 0; i < row; i++) {
    table.push(
      <tr key={i}>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
      </tr>,
    )
  }
  return table
}
export default function Table(props) {
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
        {props.books.length === 0 ? (
          <tr>
            <td colSpan={4} style={{ textAlign: 'center' }}>
              No data
            </td>
          </tr>
        ) : (
          props.books.map((book) => (
            <tr key={book.id}>
              <td> {book.name} </td>
              <td> {book.author} </td>
              <td> {book.topic} </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => props.showModal(1, book)}
                >
                  Delete
                </button>
                | <Link href={`/book/${book.id}`}> View </Link>
              </td>
            </tr>
          ))
        )}
        {props.books.length !== 0 &&
          fillTable(props.booksPerPage - props.books.length)}
      </tbody>
    </table>
  )
}
