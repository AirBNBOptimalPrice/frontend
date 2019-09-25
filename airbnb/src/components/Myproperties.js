import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import Axios from "axios";
import PropertiesCard from './PropertiesCard'  


export default function Myproperties() {
  // TODO: Add useState to track data from useEffect
  const[place, setPlace] = useState([])

  //dummy data
  const tempData = [
    {
   neighbourhood_group_cleansed: 'Baltimore',
   property_type: "House",
   accommodates: "Entire House",
    bathrooms: 2,
    bedrooms: 4,
    security_deposit: 100,
    cleaning_fee: 50,
    guests_included: 4,
    extra_people: 25,
  minimum_nights: 1,
    instant_bookable: true,
  cancellation_policy: "Never",
   tv_cable: false,
   pets: true,
   description: "Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data "
  },

  {
    neighbourhood_group_cleansed: 'New York',
    property_type: "Apartment",
    accommodates: "Entire House",
     bathrooms: 1,
     bedrooms: 2,
     security_deposit: 1200,
     cleaning_fee: 520,
     guests_included: 4,
     extra_people: 252,
   minimum_nights: 12,
     instant_bookable: false,
   cancellation_policy: "Never",
    tv_cable: false,
    pets: true,
    description: "Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data "
   }
]

  
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


console.log("Place state", place);
  return (
    
    <section className="character-list grid-view">
      <button><Link to= "/dashboard">Home</Link> </button>
      <h2>{tempData.map((e, index) => (
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

