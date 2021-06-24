import React from 'react';
import { Card } from 'react-bootstrap';

const Opening = () => {
  return (
    <div className="opening-page">
      <Card className="container" border="dark" style={{ width: '25rem' }}>
          <Card.Body className="main-card">
            <Card.Title>Earthangel</Card.Title>
              <Card.Text>
              The universe is boundless, and it is time for us to awaken and merge into those deeper parts of ourselves and into the natural magic that is offered to us by this very planet we inhabit. Welcome to your dreams and more. 
              </Card.Text>
          </Card.Body>
      </Card>
    </div>
  );
};

export default Opening;