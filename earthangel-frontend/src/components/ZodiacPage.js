import React from 'react';
import { CardGroup, Card } from 'react-bootstrap';

const Zodiac = () => {
  return (
    <div className="zodiac-page">
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Taurus | For 2021</Card.Title>
            <Card.Text>
            Taureans are the human equivalent of moss. A handmade wooden chair. They are normally satisfied with the way things are. They embody stability. Sitting in a patch of grass admiring the breeze. When everything else seems to be falling apart, Taureans are an oasis of calm, a rock of dependability. Practical knowledge and experience is their modus operandi.
            <br />
            Taureans are oriented around the physical world. They tend to be grounded and logical. They love routine and they’re committed to their own comfort. They like to be in control. They’re patient and steady, and their materialism is an extension of their pursuit of stability.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Cancer | For 2021 </Card.Title>
            <Card.Text>
            A Cancer’s personality is like wading chest deep in a lake of warm water. It feels sparkling and cool while it’s touching the body, but you know that if you were to dive in, it would feel warm.
            <br />
            Cancer’s self-awareness is like the tides. They’re constantly moving in and out of focus. Their personality is layered. They have many moods, some of which are contradictory, but they also have a deep, core self that persists.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Pisces | For 2021 </Card.Title>
            <Card.Text>
            Describing a Pisces’ personality can be difficult because Pisces tend to evade distinction. Their behavior changes significantly based on who they’re around. Pisces are just permeable membranes that pensively let things flow through them. They are cerebral sea sponges. They are boundless. They tend to dilute themselves with larger personalities to avoid having to form coherent identities.
            <br />
            Most of the qualities usually associated with Pisces dreaminess, emotionality, imagination are internal processes that are difficult to observe from the outside. This is because Pisces are primarily inward-facing. They are not self-absorbed, but they are absorbed in themselves.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  )
 };

export default Zodiac;