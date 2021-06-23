import React from 'react';
import { Card } from 'react-bootstrap';

const Main = () => {
  return (
    <Card border="light" style={{ width: '28rem' }}>
        <Card.Body>
          <Card.Title>What is this?</Card.Title>
            <Card.Text>
            Astrology puts our temporary bodies in context with our universe's vastness, allowing irrationality to invade our techno-rationalist ways of living.
            </Card.Text>
        </Card.Body>
    </Card>
  );
};

export default Main;