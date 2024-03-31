import React from 'react'
import Card from 'react-bootstrap/Card'
import {ImPointRight} from 'react-icons/im'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: 'justify'}}>
            Hi Everyone, I am <span className="purple">Priyanshu Gupta </span>
            from <span className="purple"> Bhopal, India.</span>
            <br />
            <br />
           I am a pre final year student pursuing Bachelor of Technology in Information Technology.
           <br />Apart from coding, some other activities that I love to do!
           <br />
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
           
            <li className="about-activity">
              <ImPointRight /> Video Editing
            </li>

            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p style={{marginBlockEnd: 0, color: 'rgb(155 126 172)'}}>
            "The world rewards you for value provided, not time spent."{' '}
          </p>
          <footer className="blockquote-footer">Priyanshu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
