import logo from "./Resources/acp_logo.png";
import "./App.css";
import { Navbar } from "react-bootstrap";
import HomeNavbar from './Components/HomeNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';

// import NavScrollExample from "./Navbar.js";

function App() {
  return (
    
    <div className="App">
      <HomeNavbar/> 
      <header className="App-header">
      
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
