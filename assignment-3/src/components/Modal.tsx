function Modal(props) {
   const submitForm = (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      const book = { name: data.get('new-book-name'), author: data.get('new-book-author'), topic: data.get('new-book-topic') };
      props.addBook(book);
      e.target.reset();
   };
   const addContent = (
      <div className="modal-content">
         <span className="close modal__cancel" onClick={props.closeModal}>&times;</span>
         <div className="modal__header">
            <h2> Add book </h2>
         </div>
         <div className="modal__main">
            <form id="newBookForm" onSubmit={submitForm} >
               <div className="input-group">
                  <label htmlFor="newBookForm__name">
                     Name
                     <input id="newBookForm__name" name="new-book-name" type="text" placeholder="Name" required />
                  </label>
               </div>
               <div className="input-group">
                  <label htmlFor="newBookForm__author">
                     Author
                     <input id="newBookForm__author" name="new-book-author" type="text" placeholder="Author" required />
                  </label>
               </div>
               <div className="input-group">
                  <label htmlFor="newBookForm__topic">
                     Topic
                     <select name="new-book-topic" id="newBookForm__topic" required>
                        <option value="programing"> Programming </option>
                        <option value="database"> Database </option>
                        <option value="devops"> DevOps</option>
                     </select>
                  </label>
               </div>
            </form>
         </div>
         <div className="modal__footer">
            <button type="submit" form="newBookForm" className="btn btn-success"> Create </button>
         </div>
      </div>
   )
   const delContent = (
      <div className="modal-content">
         <span className="close modal__cancel" onClick={props.closeModal}>&times;</span>
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
            <button id="delCfmBtn" className="btn" onClick={props.delBook}> Delete </button>
            <button className="modal__cancel btn btn-danger" onClick={props.closeModal}> Cancel </button>
         </div>
      </div>
   )
   return (
      <div className={props.isShow ? "modal show" : "modal"}>
         {props.typeModal === 0 ? addContent : delContent}
      </div>
   );
}
export default Modal;
// function Modal(props) {
//    const submitForm = (e) => {
//       e.preventDefault();
//       const data = new FormData(e.target);
//       const book = { name: data.get('new-book-name'), author: data.get('new-book-author'), topic: data.get('new-book-topic') };
//       props.addBook(book);
//       e.target.reset();
//    };
//    return (
//       <div className={props.isShow ? "modal show" : "modal"}>
//          <div className="modal-content">
//             <button className="close modal__cancel" onClick={props.closeModal}>&times;</button>
//             {
//                props.typeModal === 0 ?
//                   <>
//                      <div className="modal__header">
//                         <h2> Add book </h2>
//                      </div>
//                      <div className="modal__main">
//                         <form id="newBookForm" onSubmit={submitForm} >
//                            <div className="input-group">
//                               <label htmlFor="newBookForm__name">
//                                  Name
//                                  <input id="newBookForm__name" name="new-book-name" type="text" placeholder="Name" required />
//                               </label>
//                            </div>
//                            <div className="input-group">
//                               <label htmlFor="newBookForm__author">
//                                  Author
//                                  <input id="newBookForm__author" name="new-book-author" type="text" placeholder="Author" required />
//                               </label>
//                            </div>
//                            <div className="input-group">
//                               <label htmlFor="newBookForm__topic">
//                                  Topic
//                                  <select name="new-book-topic" id="newBookForm__topic" required>
//                                     <option value="programing"> Programming </option>
//                                     <option value="database"> Database </option>
//                                     <option value="devops"> DevOps</option>
//                                  </select>
//                               </label>
//                            </div>
//                         </form>
//                      </div>
//                      <div className="modal__footer">
//                         <button type="submit" form="newBookForm" className="btn btn-success"> Create </button>
//                      </div>
//                   </>
//                   :
//                   <>
//                      <div className="modal__header">
//                         <h2 style={{ textAlign: 'center' }}> Delete book </h2>
//                      </div>
//                      <div className="modal__main">
//                         <p style={{ textAlign: 'center' }}>
//                            Do you want delete <br />
//                            <strong id="delBookName">{props.delData.name}</strong> book?
//                         </p>
//                      </div>
//                      <div className="modal__footer">
//                         <button id="delCfmBtn" className="btn" onClick={props.delBook}> Delete </button>
//                         <button className="modal__cancel btn btn-danger" onClick={props.closeModal}> Cancel </button>
//                      </div>
//                   </>
//             }
//          </div>
//       </div>
//    );
// }
// export default Modal;