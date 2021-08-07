import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { Badge } from 'react-bootstrap';
import Shoppingcart from './shopping-cart.png';

export const CartWidget = () => {

const {sizeCart,cart} = useContext(CartContext);
//renderiza cuando el carro está vacio
const emptyCart = () => {
  return <div></div>;
};

//renderiza cuando el carro está lleno 
const notEmptyCart = () => {
    return (
        <div className="container">
            <NavLink to ="/cart">
            <Button variant="light"><img src={Shoppingcart} alt="carrito" width="30" height="35" className="d-inline-block align-top" /><Badge pill variant="secondary" >{sizeCart()}</Badge> </Button>
            </NavLink>
        </div>
            )
};

return (
    <>
        {cart.length === 0 ? emptyCart(): notEmptyCart() }
    </>
);
};

