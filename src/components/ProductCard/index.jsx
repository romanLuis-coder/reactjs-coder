import {ListGroup,Card,ListGroupItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export const ProductCard = ({product})=> {

    return(        
        <Card className="mb-2 p-4">
            <Link to ={`/item/${product.id}`}>
            <Card.Img variant="top" src={product.pictureUrl} className="mt-2"/>
            </Link>
            <Card.Body className="pt-2">
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
    )
    };
