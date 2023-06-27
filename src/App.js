import logo from "./Resources/acp_logo.png";
import "./App.css";
// import NavScrollExample from "./Navbar.js";

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <div className="logo">
        <img src= {logo} className="App-logo" alt="ACP" />
      </div>
        <p className="app_title"> <b>Welcome to ACPlay </b></p>
        <a
          className="App-link"
          href="http://localhost:3000/"
          // target="_blank"
          rel="noopener noreferrer"
        >
          Click here to Refresh the Page
        </a>
      </header>
    </div>
  );
}

export default App;
