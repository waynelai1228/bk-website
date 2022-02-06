import logo from './bk_logo.png';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <a href='/#front-page'><img src={logo} id="logo" alt="logo" height = "70px" width="70px"/></a>
      <a href="https://uwctf.cs.washington.edu/BatmansKitchen"><div className="nav-link">Wiki</div></a>
      <a href="https://mailman.cs.washington.edu/mailman/listinfo/uwctf"><div className="nav-link">Mailing List</div></a>
      <a href="/writeups"><div className="nav-link">Writeups</div></a>
      <a href="/#about-us"><div className="nav-link">About Us</div></a>
    </div>
  );
}

export default Header;
