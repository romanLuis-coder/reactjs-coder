import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
//import {ItemCount} from '../ItemCount';
//import {ItemList} from '../ItemList';
import React, {useEffect,useState} from 'react';
import {ItemDetail} from '../ItemDetail';

export const ItemDetailContainer = ({greeting,user}) => {

// Este agregado es para hacer el callback a la funcion de onAdd 
 /* const onAdd = (count) => {
    alert(`Has agregado ${count} productos al carrito`)}*/
  
// dentro de este componente debe ir la logica para llamar al fetch que traera el json 

const [products,setProducts] = useState([]);

useEffect( ()=> {
  const apiFetch = async () => {    
    const response = await fetch("./products/products.json");
    const json = await response.json(); 
    setTimeout(() => {
      setProducts(json)
    },2000);  
   
  }
  apiFetch();
},[]);


return (
        <>

<h1>¡Hola {user},{greeting}</h1>
<ItemDetail products={products[0]}/> 
</>
    )
};



