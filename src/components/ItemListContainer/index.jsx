import { ItemList } from "../ItemList";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/client";
import { useContext } from "react";
import {ProductContext}  from "../../context/ProductContext";

export const ItemListContainer = ({ greeting, user }) => {

const {products} = useContext(ProductContext);
  
  
  /*const [products, setProducts] = useState([]);
  const { id } = useParams();


  // Se reemplaza la llamada a json local por implementacion de Firebase

  useEffect(() => {
    async function getData() {
      const db = getFirestore();
      const COLLECTION = db.collection("products");
      const RESPONSE = await COLLECTION.get();
      const p = RESPONSE.docs.map((element) => element.data());
      console.log(p);

      let aux = id ? p.filter((element) => element.category === id) : p;
      setProducts(aux);
      console.log(aux);
    }
    getData();
  }, [id]);
*/
  
  return (
    <>
      <h1>¡Hola,bienvenido a la tienda! </h1>
      <ItemList products={products} />
    </>
  );
};

