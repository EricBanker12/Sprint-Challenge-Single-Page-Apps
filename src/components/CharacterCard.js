import React from "react"
// import { Route } from "react-router-dom"
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap"

export default function CharacterCard(props) {
  return (
    <Card className="col-sm-3" onClick={props.onClick}>
      <CardImg src={props.image} alt={props.name} />
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        {/*<Route path="/characters/:id" render={() => <CardDetails {...props} />}/>*/}
      </CardBody>
    </Card>
  )
}

// function CardDetails(props) {
//   return (
//     <>
//       <CardText>Status: {props.status || 'N.A.'}</CardText>
//       <CardText>Species: {props.species || 'N.A.'}</CardText>
//       <CardText>Type: {props.type || 'N.A.'}</CardText>
//       <CardText>Gender: {props.gender || 'N.A.'}</CardText>
//       <CardText>Origin: {props.origin.name || 'N.A.'}</CardText>
//       <CardText>Location: {props.location.name || 'N.A.'}</CardText>
//       <CardText>Episode Count: {props.episode.length || 'N.A.'}</CardText>
//     </>
//   )
// }
