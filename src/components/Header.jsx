import Categories from "./Categories";
import logo from "../assets/img/logo.png"
function Header () {
    return (
        <header className="header__section">
        <div className="header cont">
            <div className="header__logo__cont">
              <img
          src={logo}
          alt="Логотип Threads"
          className="header__logo"
        /></div>
        <Categories/>  
        </div>
      </header> 
    ) 
}

export default Header;