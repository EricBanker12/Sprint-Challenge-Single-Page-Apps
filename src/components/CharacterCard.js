import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CharacterCard(props) {
  return (
    <Card>
      <CardImg src={props.image} alt={props.name} />
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardText>{props.species}</CardText>
      </CardBody>
    </Card>
  )
}
