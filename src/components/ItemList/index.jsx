import { ProductCard } from "../ProductCard";
import {Row,Col} from 'react-bootstrap';

export const ItemList = ({products})=> {

return(
    <>
    <Row>
        {products.map(product=> {   
           return  <Col lg={4}><ProductCard product={product} /></Col>
            })
        }
    </Row>
</>
)
};
