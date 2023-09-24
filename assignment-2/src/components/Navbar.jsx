function Navbar() {
   return (
      <nav className="nav container">
         <a href="#a" className="nav__logo"> Bookstore </a>

         <div className="nav__users">
            <img className="nav__users-avatar" src="/img/user.png" alt="" />
            <span className="nav__users-name">Trình Thanh Phong</span>
         </div>
      </nav>
   )
}
export default Navbar;