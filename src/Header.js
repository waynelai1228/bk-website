import logo from './bk_logo.png';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <a href='/#front-page'><img src={logo} id="logo" alt="logo" height = "70px" width="70px"/></a>
      <div className="nav-link"><a href="https://uwctf.cs.washington.edu/BatmansKitchen">Wiki</a></div>
      <div className="nav-link"><a href="https://mailman.cs.washington.edu/mailman/listinfo/uwctf">Mailing List</a></div>
      <div className="nav-link"><a href="/writeups">Writeups</a></div>
      <div className="nav-link"><a href="/#about-us">About Us</a></div>
    </div>
  );
}

export default Header;
