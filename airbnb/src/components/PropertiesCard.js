import React from "react";
import { Link } from "react-router-dom"
import {
  Card, CardImg, CardText, CardBody,
  CardSubtitle
} from 'reactstrap';

export default function PropertiesCard(props) {
  return (
    <div>
      <Card>
        <CardBody>
          <Link to="/update">
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
            Update property
          </Link>
        </CardBody>
      </Card>
    </div>
  )
}

