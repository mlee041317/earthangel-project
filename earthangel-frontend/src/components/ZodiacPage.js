import React from 'react';
import { CardGroup, Card } from 'react-bootstrap';

const Zodiac = () => {
  return (
    <div className="zodiac-page">
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="data:image/png;base64,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" alt="test" />
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