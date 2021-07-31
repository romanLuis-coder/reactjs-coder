import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import {NavBarComponent} from './components/NavBar'; 
import {BrowserRouter,Switch,Route} from 'react-router-dom'; 
import {ItemListContainer} from './components/ItemListContainer';
import {NotFound} from './components/NotFound';
import {CartProvider } from './context/CartContext';
import { Cart } from './components/Cart';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <>
    <CartProvider>
      <ProductProvider>
      <BrowserRouter>
      <NavBarComponent/>
        <Switch>
          <Route exact path="/" component={ItemListContainer} />
          <Route exact path="/category/:id" component={ItemListContainer} />
          <Route exact path="/item/:id" component={ItemDetailContainer} />
          <Route exact path="/cart" component={Cart}/>
          <Route path = '*' component={NotFound}/>
        </Switch>
      </BrowserRouter>
      </ProductProvider>
    </CartProvider> 
    </>
  );
}

export default App;

