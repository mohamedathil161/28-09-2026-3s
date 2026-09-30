import "./navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <h2>🚀 MyWebsite</h2>
      <ul className="nav-list">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
