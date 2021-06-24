import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Opening = () => {
  return (
    <div className="opening-page d-flex justify-content-md-between align-items-center">
        <Card border="dark" style={{ width: '15rem' }}>
          <Card.Body className="opening-body">
            <Card.Title>Earthangel</Card.Title>
              <Card.Text>
              The universe is boundless, and it is time for us to awaken and merge into those deeper parts of ourselves and into the natural magic that is offered to us by this very planet we inhabit. Welcome to your dreams and more. 
              </Card.Text>
              <Button as="input" type="submit" value="Come in" Link to='/main' />
          </Card.Body>
        </Card>

    </div>
  );
};

export default Opening;