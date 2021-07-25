import React, { useContext,useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { NavLink } from 'react-router-dom';
import {Button,Container,Row,Col} from 'react-bootstrap';
import { getFirestore } from '../../firebase/client';
import Swal from 'sweetalert2';

export const Cart = () => {

const {cart,removeItem,clear} = useContext(CartContext);
//Agregado de los datos del cliente.

const [name,setName]=useState('');
const [lastName,setLastName] = useState('');
const [phone,setPhone] = useState('');
const [email,setEmail] = useState('');

//Definir una funcion para generar ordenes

const createOrder = (name,lastName,email,phone) => {

const order = { buyer: {name,lastName,email,phone} , item: cart, total:TotalCart() }
const db = getFirestore(); 
db.collection("orders").add(order).then(response => {
   Swal.fire({
    title: 'Orden creada',
    text: 'El ID de su orden es: ' + response.id,
    icon: 'success'
  });
});
 
}; 


// Para definir el total del carrito
const TotalCart = () => {
    let total = 0;
    for (const element of cart) {
        total += element.item.price * element.quantity;
    }
    return total;
}; 



const EmptyCart = () => {

return(
    <div>
        <h2>Upss...El carrito está vacio!</h2>
        <br></br>
        <NavLink to="/">
            <Button>
                Regresa al inicio
            </Button>
        </NavLink>


    </div>
    );
};

const CartView = () => {

return(    
    <section >
            <h1>Cart</h1>
            <ul>
                {
                    cart.map(element => (
                        <Row key={element.item.id}>
                            <Col md={2}><h2>{element.item.title}</h2></Col>
                            <Col md={2}><p>Cantidad: {element.quantity}</p></Col>
                            <Col md={2}><p>Precio por unidad: <strong>$ {element.item.price} </strong></p></Col> 
                            <Col md={2}><p>Precio total: <strong>${element.item.price * element.quantity}</strong></p></Col>
                            <Col md={2}><Button  onClick={() => removeItem(element.item.id)}>Eliminar</Button></Col>  
                        </Row>
                    ))
                }
            </ul>
            <Row className="justify-content-md-center">
                <Col lg={3}> <h2> Total:${TotalCart()} </h2> </Col>
                <Col lg={3}> <Button  onClick={() => clear()}>Vaciar carrito</Button> </Col>
            </Row>
            {/*Formulario para el llenado de datos de los clientes */}
            <Container>
                <Row className="justify-content-md-center"> <h2 >Datos del comprador</h2> </Row>
                    <Row>
                    <Col lg={3}><input type="text" placeholder="Nombre" onInput={event => setName(event.target.value)}></input></Col>
                    <Col lg={3}><input type="text" placeholder="Apellido" onInput={event => setLastName(event.target.value)}></input></Col>
                    <Col lg={3}> <input type="tel" placeholder="Telefono" onInput={event => setPhone(event.target.value)}></input></Col>
                    <Col lg={3}> <input type="email" required placeholder="E-mail"  onInput={event => setEmail(event.target.value)}></input></Col>
                    </Row> 
            </Container>  
            <Container >
            <Row lassName="justify-content-md-center">
                <Col >
                    <Button onClick={()=>{createOrder(name,lastName,phone,email)}}> Terminar compra </Button>
                </Col>
            </Row>  
            </Container> 
        </section>
);
};

return(
<>
{cart.length === 0 ? EmptyCart() :CartView()}
</>)

}; 

