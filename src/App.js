
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import {NavBarComponent} from './components/NavBar'; 
import {BrowserRouter,Switch,Route} from 'react-router-dom'; 
import {ItemListContainer} from './components/ItemListContainer';

function App() {
  return (
    <>
    
      <BrowserRouter>
      <NavBarComponent/>
      <Switch>
       
      <Route exact path="/" component={ItemListContainer} />
      <Route exact path="/category/id:" component={ItemListContainer} />
      <Route exact path="/item/id:" component={ItemDetailContainer} />
      </Switch>
      </BrowserRouter>
     
    
    </>
  );
}

export default App;

