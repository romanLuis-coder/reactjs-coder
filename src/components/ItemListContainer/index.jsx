import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import {ItemCount} from '../ItemCount';
import {ItemList} from '../ItemList';
import React, {useEffect,useState} from 'react';


export const ItemListContainer = ({greeting,user}) => {

// Este agregado es para hacer el callback a la funcion de onAdd 
  const onAdd = (count) => {
    alert(`Has agregado ${count} productos al carrito`)}
  
// dentro de este componente debe ir la logica para llamar al fetch que traera el json 

const [products,setProducts] = useState([]);

useEffect( ()=> {
  const apiFetch = async () => {
    const response = await fetch("./products/products.json");
    const json = await response.json(); 
    console.log(json);
    setProducts(json);
  }
  apiFetch();
},[]);


return (
        <>

<h1>¡Hola {user},{greeting}</h1>

<ItemCount  onAdd={onAdd} stock={10} initial={1} item={"item"} />
<ItemList products= {products} />

</>
    )
};



