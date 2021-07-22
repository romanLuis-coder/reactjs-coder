import {ItemList} from '../ItemList';
import React, {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import {getFirestore} from "../../firebase/client";

export const ItemListContainer = ({greeting,user}) => {

const [products,setProducts] = useState([]);
const {id} = useParams(); 

/*useEffect( ()=> {
  const apiFetch = async () => {
    const response = await fetch("/products/products.json");
    const json = await response.json();

    let aux = id ? json.filter (element => element.category === id) : json ;

    setTimeout(() => {
      setProducts(aux);
    })
    
  }
  apiFetch();
},[id]);*/


// modifico la llamada a json local por implementacion de Firebase
useEffect( ()=> {
  async function getData(){
    const db = getFirestore();
    const COLLECTION = db.collection("products");
    const RESPONSE = await COLLECTION.get();
    const p = RESPONSE.docs.map(element => element.data())
    console.log(p)

    let aux = id ? p.filter(element => element.category === id) : p; 
    setProducts(aux); 
    console.log(aux)
  }
getData();
  
},[id]);

return (
        <>

    <h1>¡Hola,bienvenido a la tienda!  </h1>
 
      <ItemList products= {products} />
    
</>
    )
};



