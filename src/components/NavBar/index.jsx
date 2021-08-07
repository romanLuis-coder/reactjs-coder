import { CartWidget } from "../CartWidget";
import { Navbar, Nav, Form, Button, FormControl ,Container} from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import Logo from "./energydrink.png";

export const NavBarComponent = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Link to="/" style={{ textDecoration: "none" }}>
        <Container>
        <Navbar.Brand>
          <img
            src={Logo}
            alt={"HEAVY DRINKING"}
            width="30"
            height="35"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        </Container>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} activeClassName="active" to="/">
            Inicio
          </Nav.Link>
          <Nav.Link as={NavLink} to="/category/destilados">
            Destilados
          </Nav.Link>
          <Nav.Link as={NavLink} to="/category/vinos">
            Vinos
          </Nav.Link>
          <Nav.Link as={NavLink} to="/category/otros">
            Otros
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Buscar"
            className="mr-2"
            aria-label="Search"/>
          <Button variant="outline-success">Buscar</Button>
        </Form>
        <Nav.Item>
          <CartWidget />
        </Nav.Item>
      </Navbar.Collapse>
    </Navbar>
  );
};
