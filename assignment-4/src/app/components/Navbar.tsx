import Image from 'next/image'

export default function Navbar(props) {
  return (
    <nav className="nav">
      <a
        href="https://github.com/BotDotZero/df-frontend-2023/tree/main/assignment-4"
        className="nav__logo"
        rel="noreferrer"
        target="_blank"
      >
        Bookstore
      </a>

      <div className="nav__users">
        <label htmlFor="checkbox" className="checkbox-label">
          <span className="fas fa-moon">🌙</span>
          <span className="fas fa-sun">🔆</span>
          <span className="ball"> </span>
          <input
            type="checkbox"
            checked={props.isDark}
            onChange={({ target }) => props.setIsDark(target.checked)}
            className="checkbox"
            id="checkbox"
          />
        </label>
        <Image
          src="/img/user.gif"
          alt="User Logo"
          className="nav__users-avatar"
          height={40}
          width={40}
          priority
        />
        <span className="nav__users-name">Trình Thanh Phong</span>
      </div>
    </nav>
  )
}
