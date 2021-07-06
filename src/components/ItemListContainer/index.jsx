import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import {ItemList} from '../ItemList';
import React, {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({greeting,user}) => {

const [products,setProducts] = useState([]);
const {id} = useParams(); 

useEffect( ()=> {
  const apiFetch = async () => {
    const response = await fetch("/products/products.json");
    const json = await response.json();

    let aux = id ? json.filter (element => element.category === id) : json ;

    setTimeout(() => {
      setProducts(aux);  
      console.log(aux);
    })
    
  }
  apiFetch();
},[id]);


return (
        <>

<h1>¡Hola,bienvenido a la tienda!</h1>
<ItemList products= {products} />

</>
    )
};



