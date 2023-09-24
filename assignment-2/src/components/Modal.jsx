function Modal(props) {
   const submitForm = (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      const book = { name: data.get('new-book-name'), author: data.get('new-book-author'), topic: data.get('new-book-topic') };
      props.addBook(book);
      e.target.reset();
   };
   return (
      <div id="addBookModal" className={props.isShow ? "modal show" : "modal"}>
         <div className="modal-content">
            <span className="close modal__cancel" onClick={props.closeModal}>&times;</span>
            {
               props.typeModal === 0 ?
                  <>
                     <div className="modal__header">
                        <h2> Add book </h2>
                     </div>
                     <div className="modal__main">
                        <form id="newBookFrm" onSubmit={submitForm} >
                           <div className="input-group">
                              <label htmlFor="newBookFrm__name"> Name </label>
                              <input id="newBookFrm__name" name="new-book-name" type="text" placeholder="Name" required />
                           </div>
                           <div className="input-group">
                              <label htmlFor="newBookFrm__author"> Author </label>
                              <input id="newBookFrm__author" name="new-book-author" type="text" placeholder="Author" required />
                           </div>
                           <div className="input-group">
                              <label htmlFor="newBookFrm__topic"> Topic </label>
                              <input id="newBookFrm__topic" name="new-book-topic" type="text" placeholder="Topic" required />
                           </div>
                        </form>
                     </div>
                     <div className="modal__footer">
                        <button type="submit" form="newBookFrm" className="btn btn-success"> Create </button>
                     </div>
                  </>
                  :
                  <>
                     <div className="modal__header">
                        <h2 style={{ textAlign: 'center' }}> Delete book </h2>
                     </div>
                     <div className="modal__main">
                        <p style={{ textAlign: 'center' }}>
                           Do you want delete <br />
                           <strong id="delBookName">{props.delData.name}</strong> book?
                        </p>
                     </div>
                     <div className="modal__footer">
                        <div id="delCfmBtn" className="btn" onClick={props.delBook}> Delete </div>
                        <div className="modal__cancel btn btn-danger" onClick={props.closeModal}> Cancel </div>
                     </div>
                  </>
            }
         </div>
      </div>
   );
}
export default Modal;