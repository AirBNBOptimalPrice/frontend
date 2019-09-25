import React, { useEffect, useState } from "react";
import Axios from "axios";
import PropertiesCard from './PropertiesCard'  
import {SearchForm} from './SearchForm'

export default function Myproperties() {
  // TODO: Add useState to track data from useEffect
  const[place, setPlace] = useState([])
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getPlace = () => {
      Axios 
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(`char response`, response)
        console.log(`char response.data.results`, response.data.results)
        setPlace(response.data.results);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }
  getPlace();
}, []);

  return (
    
    <section className="character-list grid-view">
      
      <h2>{place.map((e, index) => (
        <PropertiesCard
        key = {index}
        description= {e.neighbourhood_group_cleansed}
        property_type= {e.property_type}
        accommodates= {e.accommodates}
        bathrooms= {e.bathrooms}
        bedrooms= {e.bedrooms}
        security_deposit= {e.security_deposit}
        cleaning_fee= {e.cleaning_fee}
        guests_included= {e.guests_included}
        extra_people= {e.extra_people}
        minimum_nights= {e.minimum_nights}
        instant_bookable= {e.instant_bookable}
        cancellation_policy= {e.cancellation_policy}
        tv_cable= {e.tv_cable}
        pets= {e.pets}
        description= {e.description}

        /> 
      ))}</h2>
    </section>
  )
}

