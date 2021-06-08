import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css';
import {NavBar} from './components/navbar.jsx'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>  
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Mi app <code>HEAVY DRINKING</code> de react js. 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       
      </header>
     
    </div>
  );
}

export default App;
