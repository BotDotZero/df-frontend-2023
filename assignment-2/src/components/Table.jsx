import React from "react";


function Table(props) {
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
            {(props.books).map((book) => (
               <tr key={book.id}>
                  <td> {book.name} </td>
                  <td> {book.author} </td>
                  <td> {book.topic} </td>
                  <td>
                     <button className="btn btn-danger" onClick={() => props.showModal(1, book)}>Delete</button>
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
   );
}
export default Table;
