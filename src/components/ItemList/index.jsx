import { ProductCard } from "../ProductCard";
import {Row,Col,Container} from 'react-bootstrap';


export const ItemList = ({products})=> {

return(
    <>
    <Container>
    <Row>
        {products.map(product => {   
           return  <Col lg={3}><ProductCard product={product} /></Col>
            })
        }
    </Row>
    </Container>
</>
)
};



