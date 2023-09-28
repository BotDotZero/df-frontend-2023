function Navbar(props) {
   return (
      <nav className="nav container">
         <a href="https://github.com/BotDotZero/df-frontend-2023/tree/main/assignment-2" className="nav__logo" rel='noreferrer' target="_blank"> Bookstore </a>

         <div className="nav__users">
            <label htmlFor="checkbox" className="checkbox-label">
               <span className="fas fa-moon">🌙</span>
               <span className="fas fa-sun">🔆</span>
               <span className="ball"></span>
               <input type="checkbox" checked={props.isDark}
                  onChange={({ target }) => props.setIsDark(target.checked)} className="checkbox" id="checkbox" />
            </label>
            <img className="nav__users-avatar" src="/img/user.gif" alt="" />
            <span className="nav__users-name">Trình Thanh Phong</span>
         </div>
      </nav>
   )
}
export default Navbar;