import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export const Cart = () => {

const {cart,removeItem,clear} = useContext(CartContext);
console.log(cart);


const EmptyCart = () => {

return(
    <div>
        <h2>Upss...El carrito está vacio!</h2>
        <br></br>
        <NavLink to="/">
            <Button>
                Regresa al inicio
            </Button>
        </NavLink>


    </div>
    );
};

const CartView = () => {

return(    
    <section >
            <h1>Cart</h1>
            <ul>
                {
                    cart.map(element => (
                        <li key={element.item.id}>
                         {/*   <img src={element.item.pictureUrl} alt=""/>*/}
                            <div>
                            <h2>{element.item.title}</h2>
                                <p>Cantidad: {element.quantity}</p>
                                <p>Precio por unidad: <strong>$ {element.item.price} </strong></p>
                                <p>Precio total: <strong>${element.item.price * element.quantity}</strong></p>
                                <button onClick={() => removeItem(element.item.id)}>Eliminar </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <div >
            <button  onClick={() => clear()}>Vaciar carrito</button>
            </div>
        </section>

);

};


return(
<>

{cart.length === 0 ? EmptyCart() :CartView()}

</>)

}; 

