import React, { useState } from 'react';
import {Button,Container,Row,InputGroup,FormControl,Badge,Col} from 'react-bootstrap';
import Swal from 'sweetalert2';

export const ItemCount = ({initial,stock,onAdd, products}) => {
    const [count, setCount] = useState(initial);  

function sumar() {
    if(count < stock){
        setCount(count + 1);
}
};

function restar(){
    if(count >1){
        setCount (count -1); 
}else{
    Swal.fire('¡La mínima cantidad es 1 item!');
}
};

    return(
        <Container>
            <Row >
            <InputGroup className="mb-2 pr-2">
              <InputGroup.Prepend>
                <Button onClick={restar} variant="outline-primary">
                  -
                </Button>
              </InputGroup.Prepend>
              <FormControl value={count}/>
              <InputGroup.Append>
                <Button onClick={sumar} variant="outline-primary">
                  +
                </Button>
              </InputGroup.Append>
            </InputGroup>
            </Row>
            <Row className="justify-content-md-center p-2" >
                <Badge pill variant="primary">
                    Stock {stock}
                </Badge>
            </Row>
            <Col>
                <Row className="justify-content-md-center" >
                <Button  onClick={()=>{onAdd(count,products)}}  > Agregar al carrito </Button> 
                </Row>
            </Col>
        </Container>
    )
  
};

export default ItemCount;