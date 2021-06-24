import React from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';

const Main = () => {
  return (
    <div className="main-page">
      <Card className="container" border="dark" style={{ width: '25rem' }}>
          <Card.Body className="main-card">
            <Card.Title>What is this?</Card.Title>
              <Card.Text>
              Astrology puts our temporary bodies in context with our universe's vastness, allowing irrationality to invade our techno-rationalist ways of living.
              </Card.Text>
          </Card.Body>
      </Card>
      {/* <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src="https://yt3.ggpht.com/ytc/AAUvwnjjo0mV7tRHzvwgHnn-QuS-V8365AcOVOJ53wdL=s900-c-k-c0x00ffffff-no-rj" rounded />
          </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default Main;