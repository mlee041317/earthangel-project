import React from 'react';
import { Card } from 'react-bootstrap';

const About = () => {
  return (
    <div className="about-page d-flex justify-content-md-around align-items-center">
      <Card border="light ml-5 mt-5 pb-5" style={{ width: '22rem' }} id="about-card">
        <Card.Body>
          <Card.Title><h2>about | earthangel</h2></Card.Title>
            <Card.Text>
            The social media ascendance of mystics, angels, and the #EarthAngelofInstagram is one of the greatest uses of Internet of our time — period. One of the most enchanting of them all is Michelle — also know as @theearthangel — who delivers a heady mix of astrology knowledge, mystical visuals, self-care wisdom, and some legit #bigangelenergy on her website. 
            </Card.Text>
        </Card.Body>
    </Card>
    </div>
  );
};

export default About;