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
            <CardSubtitle>{props.neighbourhood_group_cleansed}</CardSubtitle>
            <CardSubtitle>{props.property_type}</CardSubtitle>
            <CardSubtitle>{props.accommodates}</CardSubtitle>
            <CardSubtitle>{props.bedrooms}</CardSubtitle>
            <CardSubtitle>{props.security_deposit}</CardSubtitle>
            <CardSubtitle>{props.cleaning_fee}</CardSubtitle>
            <CardSubtitle>{props.guests_included}</CardSubtitle>
            <CardSubtitle>{props.extra_people}</CardSubtitle>
            <CardSubtitle>{props.minimum_nights}</CardSubtitle>
            <CardSubtitle>{props.instant_bookable}</CardSubtitle>
            <CardSubtitle>{props.cancellation_policy}</CardSubtitle>
            <CardSubtitle>{props.tv_cable}</CardSubtitle>
            <CardSubtitle>{props.pets}</CardSubtitle>
            <CardText>{props.description}</CardText>
          </CardBody>
        </Card>
      </div>
  )
}

