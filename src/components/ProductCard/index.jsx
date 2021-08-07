import { ListGroup, Card, ListGroupItem,Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (

    <Card border="primary" className="mb-1 p-2">
      <Link to={`/item/${product.id}`}>
        <Card.Img variant="top" src={product.pictureUrl} className="mt-1" />
      </Link>
      <Card.Body className="pt-2">
        <Card.Title className="text-center">{product.title}</Card.Title>
        <Card.Text className="text-center">{product.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem className="text-center">Precio:<Badge pill variant="info"> {product.price} ARS</Badge></ListGroupItem>
      </ListGroup>
    </Card>
  );
};
