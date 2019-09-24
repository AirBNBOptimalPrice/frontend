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
        <CharacterCard
        key = {index}
        name= {e.name}
        species= {e.species}
        status= {e.status}
        type= {e.type}
        url= {e.image}
        /> 
      ))}</h2>
    </section>
  )
}