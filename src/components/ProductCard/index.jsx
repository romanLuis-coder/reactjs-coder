 import Card from 'react-bootstrap/Card'; 
 import ListGroup from 'react-bootstrap/ListGroup';
 import ListGroupItem from 'react-bootstrap/ListGroupItem';
 import Container from 'react-bootstrap/Container';
 import Row from 'react-bootstrap/Row'; 
 import Col from 'react-bootstrap/Col';

export const ProductCard = ({products})=> {

    return(
        <Container>
        <Row >
        <Col sm={4}>
        <Card >
            <Card.Img variant="top" src={products.pictureUrl} />
            <Card.Body>
            <Card.Title>{products.title}</Card.Title>
            <Card.Text>
            {products.description}    
            </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
            <ListGroupItem>Producto {products.id} </ListGroupItem>
            <ListGroupItem>Precio: {products.price} ARS</ListGroupItem>
            </ListGroup>
        </Card>
        </Col >
        </Row>
    </Container>
    
    )
       
    };