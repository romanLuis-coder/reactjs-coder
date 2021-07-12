import React from 'react'; 
import { createContext,useState} from 'react';

export const CartContext = createContext(); 

export const CartProvider = ({children}) => {

const ContextValue = "Helloooo context";

const [cart, setCart] = useState({
    cantidadTotal: 0,
    data: []
});

const cartLength = () => {
    return cart.data.reduce((accumulator, currentValue) => { return accumulator + currentValue.data.quantity}, 0);
}

const cartPrice = () => {
    return cart.data.reduce((accumulator, currentValue) => { return accumulator + currentValue.data.quantity * currentValue.data.price}, 0);
}


const addOnCart = (producto, counter) => {
    if(cart.data.find( ident => ident.id === producto.id)){
        const IndiceProducto = cart.data.findIndex( item => item.id === producto.id)
        cart.data[IndiceProducto].data.quantity = cart.data[IndiceProducto].data.quantity + counter
        setCart({...cart,
            cantidadTotal: cartLength()
        })
    } else{
        producto.data.quantity = counter
        setCart({...cart,
            cantidadTotal: cartLength() + counter,
            data: [...cart.data, producto]
        })
    }
}

const changeQty = (producto, signo) => {
    const IndiceProducto = cart.data.findIndex( item => item.id === producto.id)
    cart.data[IndiceProducto].data.quantity = signo === "-" ? cart.data[IndiceProducto].data.quantity - 1 : cart.data[IndiceProducto].data.quantity + 1;
    setCart({...cart,
        cantidadTotal: cartLength()})
}

const dropCart = () => {
    setCart ({
        cantidadTotal: 0,
        data: []
    });
}

const deleteItem = (producto) => {
    console.log(producto)
    const IndiceProducto = cart.data.findIndex( item => item.id === producto.id)
    const datoId = cart.data.filter( ident => ident.id !== producto.id)
    setCart({...cart, 
     cantidadTotal: cartLength() - cart.data[IndiceProducto].data.quantity,
     data: datoId})
 }





return  <CartContext.Provider value={{ContextValue,setCart,cart,addOnCart, cartLength, cartPrice, dropCart, deleteItem, changeQty}} > {children} </CartContext.Provider>


}; 


