import logo from "../img/logo.svg";
import "../styles/App.scss";
import "../styles/base.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Текст</p>
      </header>
    </div>
  );
}

export default App;
