import React from 'react'; 
import { createContext,useState} from 'react';

export const CartContext = createContext([]); 

export const CartProvider = ({children}) => {

// Value mockeado para ver el estado del context
const ContextValue = "Helloooo context";

const [cart, setCart] = useState({ cantidadTotal: 0, data: [] });
    

const cartLength = () => {
    return cart.data.reduce((accumulator, currentValue) => { return accumulator + currentValue.data.quantity}, 0);
}

const cartPrice = () => {
    return cart.data.reduce((accumulator, currentValue) => { return accumulator + currentValue.data.quantity * currentValue.data.price}, 0);
}


const addOnCart = (products, count) => {
    if(cart.data.find( ident => ident.id === products.id)){
        const IndiceProducto = cart.data.findIndex( item => item.id === products.id)
        cart.data[IndiceProducto].data.quantity = cart.data[IndiceProducto].data.quantity + count
        setCart({...cart,
            cantidadTotal: cartLength()
        })
    } else{
        products.data.quantity = count
        setCart({...cart,
            cantidadTotal: cartLength() + count,
            data: [...cart.data, products]
        })
    }
}

const changeQty = (products, signo) => {
    const IndiceProducto = cart.data.findIndex( item => item.id === products.id)
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

const deleteItem = (products) => {
    console.log(products)
    const IndiceProducto = cart.data.findIndex( item => item.id === products.id)
    const datoId = cart.data.filter( ident => ident.id !== products.id)
    setCart({...cart, 
     cantidadTotal: cartLength() - cart.data[IndiceProducto].data.quantity,
     data: datoId})
 }





return  <CartContext.Provider value={{cart,setCart,deleteItem,dropCart,changeQty,addOnCart,cartPrice,cartLength,ContextValue}} > {children} </CartContext.Provider>


}; 


