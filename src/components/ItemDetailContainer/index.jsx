import React, {useEffect,useState} from 'react';
import {ItemDetail} from '../ItemDetail';
import {useParams} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { getFirestore } from '../../firebase/client';

export const ItemDetailContainer = ({greeting,user}) => {

// Este agregado es para hacer el callback a la funcion de onAdd 
const onAdd = (count) => {
    alert(`Has agregado ${count} productos al carrito`)
  
  }
  
  
// useParams
const { id } = useParams(); 

const [item,setItem] = useState({});
const [flag,setflag] =useState(false);

/*
useEffect( ()=> {
  const apiFetch = async () => {    
    const response = await fetch("/products/products.json");
    const json = await response.json(); 
    let aux = json.find(element => element.id === parseInt(id)); 

    
    setTimeout(() => {
      setItem(aux)
      setflag(true)
    },2000);  
   
  }
  apiFetch();
}, [id]);
*/

// modifico la llamada a json local por implementacion de Firebase
useEffect( ()=> {
  async function getData(){
    const db = getFirestore();
    const COLLECTION = db.collection("products");
    const RESPONSE = await COLLECTION.get();
    const p = RESPONSE.docs.map(element => element.data())
    console.log(p)

    let aux = p.find(element => element.id === parseInt(id)); 


    setItem(aux); 
    console.log(aux)
    setflag(true)
  }
getData();
  
},[id]);



return (
        <>

<h1>¡Hola {user},{greeting}</h1>

{
  flag ?
  <ItemDetail products={item} onAdd={onAdd} initial={1} stock={10}  /> 
:

<div>
<Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
</Spinner>
</div>
}


</>
    )
};



