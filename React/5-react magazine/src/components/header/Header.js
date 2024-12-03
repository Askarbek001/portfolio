import "./header.css";
import LogoImg from "./../../images/Logo/Logotype.png"

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <img src={LogoImg} alt="logo" className="header__logo-img"/>
            <span>FASHION</span>
          </div>
          <div className="header__nav">
            <ul>
              <li><a href="#!">CATALOGUE</a></li>
              <li><a href="#!">FASHION</a></li>
              <li><a href="#!">FAVOURITE</a></li>
              <li><a href="#!">LIFESTYLE</a></li>
              <button className="header__nav__btn"><a href="#!">SIGN UP</a></button>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
