import React, {useContext} from "react";
import { Link } from "react-router-dom"
import axiosWithAuth from "../utils/axiosWithAuth";
import {
  Card, CardText, CardBody,
  CardSubtitle
} from 'reactstrap';
import { PropertyContext } from "../contexts/PropertyContext";

export default function PropertiesCard(props) {
  console.log("in card:", props)
  const place = useContext(PropertyContext);

  function handleDelete(e) {
    e.preventDefault();
    axiosWithAuth().delete(`https://bnb-web-backend.herokuapp.com/api/features/${props.id}`)
      .then(res => {
        console.log(res)
        window.location.reload();
      })
  }

  return (
    <div>
      <Card>
        <CardBody>
          <Link to="/update">
            <CardSubtitle>Neighbourhood: {place.neighbourhood_group_cleansed}</CardSubtitle>
            <CardSubtitle>Property Type: {place.property_type}</CardSubtitle>
            <CardSubtitle>Maximum Number of Guests: {place.accommodates}</CardSubtitle>
            <CardSubtitle>Number of Bedrooms: {place.bedrooms}</CardSubtitle>
            <CardSubtitle>Number of Bathrooms: {place.security_deposit}</CardSubtitle>
            <CardSubtitle>Cleaning Fee: {place.cleaning_fee}</CardSubtitle>
            <CardSubtitle>Number of Guests in Base Price: {place.guests_included}</CardSubtitle>
            <CardSubtitle>Cost for Extra Guests: {place.extra_people}</CardSubtitle>
            <CardSubtitle>Minimum Number of Nights: {place.minimum_nights}</CardSubtitle>
            <CardSubtitle>Instant Bookable: {place.instant_bookable ? 'Yes' : 'No'}</CardSubtitle>
            <CardSubtitle>Cancellation Policy: {place.cancellation_policy}</CardSubtitle>
            <CardSubtitle>TV/Cable included: {place.tv_cable ? 'Yes' : 'No'}</CardSubtitle>
            <CardSubtitle>Pets Allowed: {place.pets_allowed ? 'Yes' : 'No'}</CardSubtitle>
            <CardText>Brief Description of Property: {place.description}</CardText>
          </Link>
        </CardBody>
        <button onClick={handleDelete}>X</button>
      </Card>
    </div>
  )
}

