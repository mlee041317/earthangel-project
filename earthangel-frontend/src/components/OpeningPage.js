import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Opening = () => {
  return (
    <div className="opening-page d-flex justify-content-md-top align-items-center">
      <Card border="secondary mt-1 ml-3" id="opening-card" style={{ width: '24rem' }}>
        <Card.Body className="opening-body">
         <Card.Title><h2>earth | angel</h2></Card.Title>
             <Card.Text>
            The universe is boundless, and it is time for us to awaken and merge into those deeper parts of ourselves and into the natural magic that is offered to us by this very planet we inhabit. Welcome to your dreams and more. 
             </Card.Text>
            <Link to='/main'><Button variant="secondary" id="opening-button" as="input" type="submit" value="enter" /></Link>
        </Card.Body>
       </Card>
    </div>

  );
};

export default Opening;