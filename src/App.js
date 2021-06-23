import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import {NavBar} from './components/NavBar'; 



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/> 
      <ItemListContainer  user ={"usuario"} greeting={"Bienvenido a esta tienda!"}/> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Mi app <code>HEAVY DRINKING</code> de react js. 
        </p>
       
      </header>
     
    </div>
  );
}

export default App;

