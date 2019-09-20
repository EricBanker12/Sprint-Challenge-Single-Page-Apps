import React from "react"
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap"

export default function CharacterCard(props) {
  return (
    <Card className="col-sm-3">
      <CardImg src={props.image} alt={props.name} />
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardText>{props.species}</CardText>
      </CardBody>
    </Card>
  )
}
