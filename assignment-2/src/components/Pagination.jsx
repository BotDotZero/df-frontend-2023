const Paginate = ({ booksPerPage, totalBooks, currentPage, paginate, previousPage, nextPage }) => {
   const pageNumbers = [];

   for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
      pageNumbers.push(i);
   }

   return (
      <div className={totalBooks === 0 ? "pagination hide" : "pagination"}>
         <span onClick={previousPage} className="page-number">
            Prev
         </span>
         {pageNumbers.map((number) => (
            <span
               key={number}
               onClick={() => paginate(number)}
               className={number === currentPage ? "page-number active" : "page-number"}
            >
               {number}
            </span>
         ))}
         <span onClick={nextPage} className="page-number">
            Next
         </span>
      </div>
   );
};

export default Paginate;