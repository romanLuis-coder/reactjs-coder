 import Card from 'react-bootstrap/Card'; 
 import ListGroup from 'react-bootstrap/ListGroup';
 import ListGroupItem from 'react-bootstrap/ListGroupItem';
 import Container from 'react-bootstrap/Container';
 import Row from 'react-bootstrap/Row'; 
 import Col from 'react-bootstrap/Col';
 import {Link} from 'react-router-dom';

export const ProductCard = ({product})=> {

    return(
        <Container>
        <Row >
        <Col sm={4}>
        <Link to ={`/item/${product.id}`}>
        <Card >
            <Card.Img variant="top" src={product.pictureUrl} />
            <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
            {product.description}    
            </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
            <ListGroupItem>Producto {product.id} </ListGroupItem>
            <ListGroupItem>Precio: {product.price} ARS</ListGroupItem>
            </ListGroup>
      
        </Card>
        </Link>
        </Col >
        </Row>
    </Container>
    
    )
       
    };