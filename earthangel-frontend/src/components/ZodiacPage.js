import React from 'react';
import { CardColumns, Card } from 'react-bootstrap';
import zodiacpage from '../images/zodiacpage.gif';

const Zodiac = () => {
  return (
    <div className="zodiac-page">
    <img className="stars-gif" src={ zodiacpage } />
    <div className="container">
      <CardColumns>
        <Card className="card-group">
          <Card.Body>
            <Card.Title>aries | for 2021</Card.Title>
            <Card.Text>
            Aries are driven by a desire to prove themselves and their strength. They naturally take charge and are competitive and ambitious. Aries are spontaneous and courageous. They have a sense of adventure and love to explore. They’re determined and bold, and are good at initiating new projects. They have high energy and can initiate quick actions. They can also be impatient, but are naturally active and don’t like to waste time.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-group">
          <Card.Body>
            <Card.Title>taurus | for 2021 </Card.Title>
            <Card.Text>
            Once they get into a groove, it’s difficult for them to get out of it. Object in motion stays in motion. Object at rest stays at rest. Appreciative of beauty. Attuned to physical pleasure. They like things to be predictable. They are perfectly happy eating the same meal over and over, or wearing the same outfit for a week straight. They would prefer things be consistent than chaotically good. They like to discover what they have the most fun doing, and then do it to the extreme.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-group">
          <Card.Body>
            <Card.Title>gemini | for 2021 </Card.Title>
            <Card.Text>
            Geminis have an uncanny ability to size up a person’s character in a matter of seconds, even if they only just met them. If someone’s bluffing, they’ll be the first to notice. They are great communicators, very responsive and sensitive listeners.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-group">
          <Card.Body>
            <Card.Title>cancer | for 2021 </Card.Title>
            <Card.Text>
            Cancer’s self-awareness is like the tides. They’re constantly moving in and out of focus. Their personality is layered. They have many moods, some of which are contradictory, but they also have a deep, core self that persists.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-group">
          <Card.Body>
            <Card.Title>leo | for 2021 </Card.Title>
            <Card.Text>
            Leos have an unrelenting appetite for growth that is easily satiated by the praise of others. When they are hurting, it shows. They will use their anger as a protective wall to shield their vulnerabilities. They want to be perceived as unbreakable because they are scared of admitting vulnerability, needing things from other people, being incomplete.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-group">
          <Card.Body>
            <Card.Title>virgo | for 2021 </Card.Title>
            <Card.Text>
            Virgos actively seek out messes—physical, interpersonal, emotional—in order to fix them.They like working on busy little behind-the-scenes tasks that make life run more smoothly for everyone. They need to keep going at full speed, because if they slow down, the unfolding chaos of the world catches up with them and their heads are filled with constant anxiety. Fixing external chaos distracts them from their own internal messes.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-group">
          <Card.Body>
            <Card.Title>libra | for 2021 </Card.Title>
            <Card.Text>
            They want to be admired not for their talents but for their charm. They want to be seen as the responsible figure who can balance out the turbulent elements around them. They feel an intense amount of guilt and shame when they are unhappy because they know that their unhappiness affects everyone around them.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-group">
          <Card.Body>
            <Card.Title>scorpio | for 2021 </Card.Title>
            <Card.Text>
            Despite their ability to be generally popular, there’s something very lonely about Scorpios. They have a ruthless view of the world. Eat or be eaten. Every human interaction is a meeting of opposing powerful forces. A clashing of wants and needs where somebody wins and somebody loses. Their knowledge of other people’s internal structures gives them an edge over the competition. They know how to play people against each other.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-group">
          <Card.Body>
            <Card.Title>sagittarius | for 2021 </Card.Title>
            <Card.Text>
            On an unbounded quest to discover the whole of the universe inside of themselves, Sagittarians are unshackled from any particular worldly attachment. They are reckless in their pursuit of what they want, and often end up doing and experiencing things that defy conceptions of the possible.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-group">
          <Card.Body>
            <Card.Title>capricorn | for 2021 </Card.Title>
            <Card.Text>
            Capricorns are constantly competing with themselves. They do want praise, though. Not adulation, just praise. Praise is a simple acknowledgment of a job well done. Praise is a pat on the back. They use this as validation to compensate for general feelings of incompetence and inferiority. They plow through adversity with blinders on until they reach success.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-group">
          <Card.Body>
            <Card.Title>aquarius | for 2021 </Card.Title>
            <Card.Text>
            Aquarians are always running little tests. They live their lives as one big science experiment, using the element of surprise to collect reactions and construct theories about the intricacies of human nature. They are walking abstract art pieces, shattering traditional perspectives with their complete disregard for convention. They are martyrs to the cause of “humanity”, and “freedom” is their only demand.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-group">
          <Card.Body>
            <Card.Title>pisces | for 2021 </Card.Title>
            <Card.Text>
            Most of the qualities usually associated with Pisces (dreaminess, emotionality, imagination) are internal processes that are difficult to observe from the outside. This is because Pisces are primarily inward-facing. They are not self-absorbed, but they are absorbed in themselves.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardColumns>
      </div>
    </div>

  )
 };

export default Zodiac;