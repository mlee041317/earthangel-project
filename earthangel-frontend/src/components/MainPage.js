import React from 'react';
import { Card } from 'react-bootstrap';

const Main = () => {
  return (
    <div className="main-page d-flex justify-content-md-between align-items-center">
        <Card border="dark ml-3 mt-2" style={{ width: '19rem' }} id="main-card">
          <Card.Body>
            <Card.Title><h2>full moon | capricorn</h2></Card.Title>
              <Card.Text>
              The Cancer Sun harmonizes with Jupiter, who’s retrograde in Pisces, on June 23rd. This will help us to feel more confident and bold. Later in the day, Venus, who is in Cancer, opposes Pluto, who is in Capricorn, creating tensions and power struggles with others. The Capricorn Full Moon occurs on June 24th, exposing such issues and allowing us to let it go. Neptune retrograde commences on June 25th and lasts until December 1st in Pisces, awakening dreams and emotions within. Venus enters Leo on June 27th, adding passion to our hearts and generosity to our wallets. Mars, who’s in Leo, connects with the Nodes of Destiny, on June 28th giving us the incentive to move forward with our visions and goals. 
              </Card.Text>
            {/* <Card.Title>What is this?</Card.Title>
              <Card.Text>
              Astrology puts our temporary bodies in context with our universe's vastness, allowing irrationality to invade our techno-rationalist ways of living.
              </Card.Text> */}
          </Card.Body>
        </Card>
    </div>
  );
};

export default Main;