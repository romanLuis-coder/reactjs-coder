import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from '../ItemCount';


const onAdd = (count) => {
    alert(`Has agregado ${count} productos al carrito`)}

export const ItemDetail = ({products}) => {
 
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
            <ItemCount onAdd={onAdd} initial={1} stock={10}  />  
            </Card.Body>
        </Card>
        </Col>
        </Row>
    </Container>
    </>
)
};

 export default ItemDetail; 