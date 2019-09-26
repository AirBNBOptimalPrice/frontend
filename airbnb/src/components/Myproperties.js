import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropertiesCard from './PropertiesCard'
import axiosWithAuth from "../utils/axiosWithAuth";
import { PropertyContext } from "../contexts/PropertyContext";


export default function Myproperties() {
  // TODO: Add useState to track data from useEffect
  const [placeList, setPlaceList] = useState([])

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getPlace = () => {
      axiosWithAuth()
        .get("https://bnb-web-backend.herokuapp.com/api/features/")
        .then(response => {
          console.log(`get response`, response)
          setPlaceList(response.data.feature)

        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getPlace();
  }, []);


  console.log("Place state", placeList);
  return (

    <section className="character-list grid-view">
      <button>

        <Link to="/dashboard">Home</Link>

      </button>
      {placeList.map((place) => (
        <PropertyContext.Provider value={place}>
          <PropertiesCard/>
        </PropertyContext.Provider>
      ))}
    </section>
  )
}

