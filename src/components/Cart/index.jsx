import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { NavLink } from 'react-router-dom';
import {Button,Row,Col,Container,Image} from 'react-bootstrap';
import {Link}from 'react-router-dom';
import {FiHome,FiCheckCircle,FiTrash2} from 'react-icons/fi';

export const Cart = () => {
  const { cart, removeItem, clear, TotalCart } = useContext(CartContext);
  const EmptyCart = () => {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <h2 className="display-3 text-danger text-center text-capitalize">
                Upss...El carrito está vacio!
              </h2>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <NavLink to="/">
                <Button className="text-center">
                  Regresa al inicio
                  <FiHome />
                </Button>
              </NavLink>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-md-center">
            <Col md={6}>
              <Image
                src="https://i.pinimg.com/originals/bc/bd/99/bcbd99c43aea08b85d3c3a6b80a47b56.png"
                fluid
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  };

  const CartView = () => {
    return (
      <>
        <h2 className="display-4 text-center">Carrito</h2>
        <ul>
          {cart.map((element) => (
            <Row key={element.item.id}>
              <Col md={2}>
                <h2>{element.item.title}</h2>
              </Col>
              <Col md={2}>
                <p>Cantidad: {element.quantity}</p>
              </Col>
              <Col md={2}>
                <p>
                  Precio por unidad: <strong>$ {element.item.price} </strong>
                </p>
              </Col>
              <Col md={2}>
                <p>
                  Precio total:{" "}
                  <strong>${element.item.price * element.quantity}</strong>
                </p>
              </Col>
              <Col md={2}>
                <Button
                  variant="danger"
                  onClick={() => removeItem(element.item.id)}
                >
                  X
                </Button>
              </Col>
            </Row>
          ))}
        </ul>
        <Row className="justify-content-md-center">
          <Col lg={3}>
            {" "}
            <h2> Total:${TotalCart()} </h2>{" "}
          </Col>
          <Col lg={3}>
            {" "}
            <Button onClick={() => clear()}>Vaciar carrito<FiTrash2/></Button>{" "}
          </Col>
          <Col lg={3}>
            <Link to="/checkout">
              <Button>Ir al checkout<FiCheckCircle/></Button>
            </Link>
          </Col>
        </Row>
      </>
    );
  };

  return <>{cart.length === 0 ? EmptyCart() : CartView()}</>;
}; 

