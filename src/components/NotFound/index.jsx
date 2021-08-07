import React from "react";
import { Col, Row, Container } from "react-bootstrap";

export const NotFound = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col lg={8}>
          <img
            src="https://lh3.googleusercontent.com/proxy/psl7MPa1b2TmA8KKGVbiREVqvWN1xa-6H2wX0EeOv9k5XXS_9wRxm3n5_zByq4C4djZMGKf8hv4l3jncQMWv3PIcXXOARY3F0K7GTWLn4lD2C7D8v3s"
            alt="404"
          />
        </Col>
      </Row>
    </Container>
  );
};
