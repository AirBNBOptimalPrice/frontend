import React from "react";
import {
  Card, CardImg, CardText, CardBody,
 CardSubtitle
} from 'reactstrap';

export default function PropertiesCard(props) {
  return(
      <div>
        <Card>
          <CardImg top width="100%" src={props.url} alt="Card image cap" />
          <CardBody>
            <CardSubtitle>{props.name}</CardSubtitle>
            <CardSubtitle>{props.species}</CardSubtitle>
            <CardSubtitle>{props.type}</CardSubtitle>
            <CardText>{props.status}</CardText>
          </CardBody>
        </Card>
      </div>
  )
}