 
import { CartWidget } from '../CartWidget'; 
import {Navbar,Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'; 

export const NavBarComponent = () => {

    return (
      
<>
<Navbar bg="light" expand="lg">
  <Navbar.Brand as={NavLink} activeClassName="active" to="/">Heavy Drinking</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={NavLink} activeClassName="active" to="/">Inicio</Nav.Link>
      <Nav.Link as={NavLink}   to="/category/destilados">Destilados</Nav.Link>
      <Nav.Link as={NavLink}   to="/category/otros">Otros</Nav.Link>
    </Nav>
  <Nav.Item>
    <CartWidget/>
  </Nav.Item>  
  </Navbar.Collapse>
  
</Navbar>
</>
)

}; 

export default NavBarComponent;