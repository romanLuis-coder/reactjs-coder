import React from 'react';
import ItemCount from '../ItemCount';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { Button,Row,Col,Container,Card, } from 'react-bootstrap';
import Swal from 'sweetalert2';

export const ItemDetail = ({products}) => {

    const [confirm,setConfirm]= useState(false);
    const onAdd = (count) => {
    
        Swal.fire(`Has agregado  ${count} productos al carrito`);
        setConfirm(true); 
    }

return (
    <>
    <Container >
        <Row className="justify-content-md-center">
        <Col xs={4}>
        <Card>
            <Card.Img variant="top" src={products.pictureUrl} />
            <Card.Body>
            <Card.Text>{products.title}</Card.Text>
            <Card.Text>{products.description}</Card.Text>
            <Card.Text> {products.price}</Card.Text>
            { !confirm ? <ItemCount onAdd={onAdd} initial={1} stock={10} /> : <Link to="/cart"><Button>Terminar compra</Button></Link>  }
            </Card.Body>
        </Card>
        </Col>
        </Row>
    </Container>
    </>
)
};

export default ItemDetail; 

 