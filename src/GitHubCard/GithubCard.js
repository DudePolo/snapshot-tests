import React from "react"
import Card from "react-bootstrap/Card"
import AndresP from './AndresP.png'
import { CardText } from "react-bootstrap";

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={MaxH} />
        <Card.Body>
            <Card.Title>Andres Polo-Wood</Card.Title>
            <CardText>
                My Name is Andres and I have a 3 year old son
            </CardText>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard