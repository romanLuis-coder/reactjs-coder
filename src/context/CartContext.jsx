import React from 'react'; 
import { createContext,useState} from 'react';

export const CartContext = createContext([]); 

export const CartProvider = ({defaultValue=[],children}) => {

const [cart, setCart] = useState([]);

//agregar cierta cantidad de un ítem al carrito
    const addItem = (item, quantity) => {
        if(cart.length === 0){
            setCart([{item: item,quantity: quantity}])            
        } else {            
            isInCart(item.id)?
            updateCart(item.id,quantity)            
            :
            setCart([...cart,{item: item,quantity: quantity}])
        }
        
    }

    //Total carrito

    const sizeCart = () =>{
        let size = 0;
        for (const element of cart){
            size += element.quantity;
        }
        return size;
    }

    //Para actualizar el cart 
    const updateCart = (id,quantity) =>{
         let posUpdate = posInCart(id)
         let cartAux = cart         
        cartAux[posUpdate].quantity+=quantity
        setCart(cartAux)
        
    }

    //Verifica si Existe en el carrito, devuelve false/true
    const isInCart =(id) =>{
        return cart.some(element => element.item.id === id)
    }
    //Devuelve la posición en el cart
    const posInCart =(id) =>{
        return cart.findIndex(element=>element.item.id === id)
    }

    //Remover un item del cart por usando su id
    const removeItem = (itemId) => {
        let cartAux = [...cart];
        console.log(cartAux);
        cartAux = cartAux.filter(element=> element.item.id !== itemId);
        console.log(cartAux);
        setCart(cartAux)
    }
    
    //Vaci el carrito
    const clear = () =>{
        setCart([])
    }


return  <CartContext.Provider value={{cart,setCart,addItem, removeItem, clear,updateCart,sizeCart}} > {children} </CartContext.Provider>


}; 


