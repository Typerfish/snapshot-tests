import React from "react"
import Card from "react-bootstrap/Card"
import Me from './me.jpeg'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        {}
        <Card.Img variant="top" src={Me} />
        <Card.Body>
            <Card.Title>Deanna Ireland</Card.Title>
            <Card.Text>
            I am a junior developer doing my best.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard