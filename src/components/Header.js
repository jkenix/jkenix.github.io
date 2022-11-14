import logo from "../img/kemenger-mektebi-logo.svg";
import Ccomponent from "./Ccomponent.js";
import Afcomponent from "./Afcomponent.js";
import Fcomponent from "./Fcomponent.js";

function Header() {
  return (
    <header className="l-header">
      <div className="logo">
        <img src={logo} alt="Kemenger logo" />
      </div>
      <nav className="header-menu">
        
      </nav>
    </header>
  );
}

export default Header;
