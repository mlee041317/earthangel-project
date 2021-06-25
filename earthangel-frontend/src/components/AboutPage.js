import React from 'react';
import { Card } from 'react-bootstrap';

const About = () => {
  return (
    <div className="about-page d-flex justify-content-md-between align-items-center">
      <Card border="light" style={{ width: '19rem' }}>
        <Card.Body className="about-card">
          <Card.Title>about | earthangel</Card.Title>
            <Card.Text>
            "Your conflicts, all the difficult things, the problematic situations in your life are not chance or haphazard. They are actually yours. They are specifically yours, designed specifically for you by a part of you that loves you more than anything else. The part of you that loves you more than anything else has created roadblocks to lead you to yourself. You are not going in the right direction unless there is something pricking you in the side, telling you "Look here, this way!" That part of you loves you so much that it doesn't want you to lose the chance. It will go to extreme measures to wake you up, it will make you suffer greatly if you don't listen. What else can it do? That is its purpose."
            </Card.Text>
        </Card.Body>
    </Card>
    </div>
  );
};

export default About;