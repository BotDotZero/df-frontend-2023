const Paginate = ({ booksPerPage, totalBooks, currentPage, paginate, previousPage, nextPage }) => {
   const pageNumbers: number[] = [];

   for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
      pageNumbers.push(i);
   }

   return (
      <div className={totalBooks === 0 ? "pagination hide" : "pagination"}>
         <button onClick={previousPage} className="page-number">
            Prev
         </button>
         {pageNumbers.map((number) => (
            <button
               key={number}
               onClick={() => paginate(number)}
               className={number === currentPage ? "page-number active" : "page-number"}
            >
               {number}
            </button>
         ))}
         <button onClick={nextPage} className="page-number">
            Next
         </button>
      </div>
   );
};

export default Paginate;