import React from 'react'; 
import { createContext,useState,useParams,useEffect } from 'react';
import { getFirestore } from '../firebase/client';

export const ProductContext = createContext([]); 

export const ProductProvider = ({children}) => {

const [products, setProducts] = useState([]);
const  {id} = useParams();

// Se reemplaza la llamada a json local por implementacion de Firebase

useEffect(() => {
    async function getData() {
      const db = getFirestore();
      const COLLECTION = db.collection("products");
      const RESPONSE = await COLLECTION.get();
      const p = RESPONSE.docs.map((element) => element.data());
      
      let aux = id ? p.filter((element) => element.category === id) : p;
      setProducts(aux);
    }
    getData();
  }, [id]);

return <ProductContext.Provider value={products} > {children} </ProductContext.Provider>

}; 

