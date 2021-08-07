import React from 'react';
import ItemCount from '../ItemCount';
import { useState,useContext } from 'react';
import {Link} from 'react-router-dom';
import { Button,Row,Col,Container,Card, } from 'react-bootstrap';
import Swal from 'sweetalert2';
import {CartContext} from '../../context/CartContext';
import {FiShoppingCart,FiHome} from 'react-icons/fi';

export const ItemDetail = ({products}) => {

//importar del context el metodo addItem
const {addItem} = useContext(CartContext);
const [confirm,setConfirm]= useState(false);

const onAdd = (count) => {
    Swal.fire(`Has agregado  ${count} productos al carrito`);
    setConfirm(true); 
    addItem(products, count)
}

return (
    <>
    <Container >
        <Row className="justify-content-md-center">
        <Col xs={4}>
        <Card>
            <Card.Img variant="top" src={products.pictureUrl} />
            <Card.Body>
            <Card.Text className="text-center">{products.title}</Card.Text>
            <Card.Text className="text-center text-primary"> {products.price} ARS$</Card.Text>
            { !confirm ? <ItemCount onAdd={onAdd} initial={1} stock={10} /> : 
            <Container>
                <Row>
                    <Col className="text-center">
                        <Link to="/"><Button>Continuar<FiHome/></Button></Link>{' '}
                        <Link to="/cart"><Button>Ir al carrito<FiShoppingCart/></Button></Link>
                    </Col>
                </Row>
            </Container>}
            </Card.Body>
        </Card>
        </Col>
        </Row>
    </Container>
    </>
)
};



 