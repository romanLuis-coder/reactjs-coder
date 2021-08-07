import { ItemList } from "../ItemList";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/client";
import { Container, Row, Col } from "react-bootstrap";

export const ItemListContainer = ({ greeting, user }) => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  // Modifico la llamada a json local por implementacion de Firebase

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

  return (
    <>
      <Container >
        <Row>
          <Col>
            <h1
              className="display-4 text-center fw-bold rounded-pill"
              style={{ backgroundColor: "none" }}
            >
              ¡Bienvenido a Heavy Drinking!{" "}
            </h1>
          </Col>
        </Row>
      </Container>
      <ItemList products={products} />
    </>
  );
};
