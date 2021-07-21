
import Button from 'react-bootstrap/Button';
import {MdLocalGroceryStore} from 'react-icons/md'
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

export const CartWidget = () => {

const {sizeCart,cart} = useContext(CartContext);


const emptyCart = () => {

return( 
     <div>
        
     </div>
     );
};

const notEmptyCart = () => {
    return (
        <div className="container">
            <NavLink to ="/cart">
            <Button variant="light"><MdLocalGroceryStore/>{sizeCart()} </Button>
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

