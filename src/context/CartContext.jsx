import React from 'react'; 
import { useState } from 'react';

export const CartContext = React.createContext(); 

export const CartProvider = ({children}) => {

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
   

    const addOnCart = (productos, counter) => {
        if(cart.data.find( ident => ident.id === productos.id)){
            const IndiceProducto = cart.data.findIndex( item => item.id === productos.id)
            cart.data[IndiceProducto].data.quantity = cart.data[IndiceProducto].data.quantity + counter
            setCart({...cart,
                cantidadTotal: cartLength()
            })
        } else{
            productos.data.quantity = counter
            setCart({...cart,
                cantidadTotal: cartLength() + counter,
                data: [...cart.data, productos]
            })
        }
    }

    const changeQty = (productos, signo) => {
        const IndiceProducto = cart.data.findIndex( item => item.id === productos.id)
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

    const deleteItem = (productos) => {
        console.log(productos)
        const IndiceProducto = cart.data.findIndex( item => item.id === productos.id)
        const datoId = cart.data.filter( ident => ident.id !== productos.id)
        setCart({...cart, 
         cantidadTotal: cartLength() - cart.data[IndiceProducto].data.quantity,
         data: datoId})
     }
















return (
    <CartContext.Provider value ={{cart,setCart}} >
        {children}
    </CartContext.Provider>
)

}; 
