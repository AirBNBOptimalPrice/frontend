import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import './priceforms.css'
import airbnb from '../assets/airbnb.png'
import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios';

const OptForm = ({ values, errors, touched, status }) => {
  const [opt, setOpt] = useState([]);
  useEffect(() => {
    if (status) {
      setOpt([...opt, status]);
    }
  }, [status]);

  return (
    <div>
    <div className='backgroundOpt'></div>
    <div className="e-form">
      
       <button><Link to="/dashboard">Home</Link></button>
       <h1>New Listing Form</h1>
       <img className="logo" src={airbnb} alt="Air bnb logo"/>
      <Form>

        <label>
        Neighborhood
      <Field component="select" className="neighborhood" name="neighbourhood_group_cleansed">
          <option>Neighborhood</option>
          <option value="Charlottenburg-Wilm">Charlottenburg-Wilm</option>
          <option value="Friedrichshain-Kreuzberg">Friedrichshain-Kreuzberg</option>
          <option value="Lichtenberg">Lichtenberg</option>
          <option value="Marzahn - Hellersdorf">Marzahn - Hellersdorf</option>
          <option value='Mitte'>Mitte</option>
          <option value="Neukölln">Neukölln</option>
          <option value="Pankow">Pankow</option>
          <option value="Tempelhof - Schöneberg">Tempelhof - Schöneberg</option>
          <option value="Reinickendorf">Reinickendorf</option>
          <option value="Spandau">Spandau</option>
          <option value="Steglitz - Zehlendorf">Steglitz - Zehlendorf</option>
          <option value="Treptow - Köpenick">Treptow - Köpenick</option>
        </Field>
        </label>
      
        <label>
        Property Type
        <Field component="select" className="property_type" name="property_type">
          <option>Property Type</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="Condominium">Condominium</option>
          <option value="Guesthouse">Guesthouse</option>
          <option value="Guest suite">Guest suite</option>
          <option value="Loft">Loft</option>
          <option value="Townhouse">Townhouse</option>
          <option value="Serviced apartment">Serviced apartment</option>
          <option value="Bed and breakfast">Bed and breakfast</option>
          <option value="Boutique hotel">Boutique hotel</option>
          <option value="Bungalow">Bungalow</option>
          <option value="Boat">Boat</option>
          <option value="Other">Other</option>
        </Field>
        </label>
        
        <label>
          Maximum Number of Guests   
          <Field type="number" name="accommodates" placeholder="1" />
        </label>

        <label>
        Number of Guests Included in Base Price
        <Field type="number" name="guests_included" placeholder="1" />
        </label>

        <label>
        Charge for extra persons
        <Field type="number" name="extra_people" placeholder="0" />
        </label>

        <label>
        Bathrooms
        <Field type="number" name="bathrooms" placeholder="Number of Bathrooms" />
        {touched.bathrooms && errors.baths && (
          <p className="bathrooms">{errors.bathrooms}</p>
        )}
         </label>

        <label>
        Beds
        <Field type="number" name="bedrooms" placeholder="Number of bedrooms" />
        {touched.beds && errors.beds && (
          <p className="bedrooms">{errors.beds}</p>
        )}
        </label>

        <label>
        Security Deposit
        <Field type="number" name="security_deposit" placeholder="0" />
        </label>

        <label>
        Cleaning Fee
        <Field type="number" name="cleaning_fee" placeholder="0" />
       
        </label>

        <label>
        Minimum nights
        <Field type="number" name="minimum_nights" placeholder="1" />
        </label>

        <label>
        Cancellation Policy
        <Field component="select" className="cancellation_policy" name="cancellation_policy">
          <option>Policy</option>
          <option value="strict">strict_14_with_grace_period</option>
          <option value="flexible">flexible</option>
          <option value="moderate">moderate</option>
          <option value="super_strict_30">super_strict_30</option>
          <option value="super_strict_60">super_strict_60</option>
        </Field>
        </label>

          <br></br>
        <label>
          Instant Bookable
          <Field
            type="checkbox"
            name="instant_bookable"
            checked={values.instant_bookable}
          />
        </label>
        <br></br>
        
        <br></br>
        <label>
          Cable TV
          <Field
            type="checkbox"
            name="tv_cable"
            checked={values.tvcable}
          />
        </label>
        <br></br>
       
        <br></br>
        <label>
          Pets Allowed
          <Field
            type="checkbox"
            name="pets_allowed"
            checked={values.pets_allowed}
          />
        </label>
        <br></br>
          <Field
            component="textarea"
            type="text"
            name="description"
            placeholder="Please give a brief description of the property"
          />
        <br></br>
        <button>Submit!</button>
      </Form>
      {opt.map(e => {
        return(
        <ul key={e.id}>
          <li>bedrooms:{e.bedrooms}</li>
          <li>bathrooms: {e.bathrooms}</li>
          <li>property_type: {e.property_type}</li>
        </ul>)
      })}
    </div>
    </div>
  );
};
const FormikOptForm = withFormik({
  mapPropsToValues({neighbourhood_group_cleansed, property_type, guests_included, accommodates, extra_people, bathrooms,
    bedrooms, security_deposit, cleaning_fee , minimum_nights, cancellation_policy, instant_bookable, tv_cable,  pets_allowed, description}) {
    return {
      neighbourhood_group_cleansed: neighbourhood_group_cleansed || "",  //predefined field(ex. email already in field) or empty
      property_type: property_type || "",
      guests_included: guests_included || 1,
      accommodates: accommodates || 1,
      extra_people: extra_people || 0,
      bathrooms: bathrooms || "",
      bedrooms: bedrooms || "",
      security_deposit: security_deposit || 0,
      cleaning_fee : cleaning_fee  || 0,
      minimum_nights: minimum_nights || 1, //predefined fields
      cancellation_policy: cancellation_policy || "",
      instant_bookable: instant_bookable || false,
      tv_cable: tv_cable || false,
      pets_allowed: pets_allowed || false,
      description: description || "",
    };
  },
  validationSchema:
  Yup.object().shape({
    bathrooms: Yup.string().required("Please specify max number of bathrooms"),
    bedrooms: Yup.string().required("Please specify number of beds"),
  }),
  //You can use this to see the values
  handleSubmit(values, {setStatus}) {
    console.log("Object of data:", values)

    axios.post('https://airbnb-optimal-price.herokuapp.com/api', values)
      .then(res => {
        console.log("DS Post Response ", res)
      })

    axiosWithAuth()
      .post("https://bnb-web-backend.herokuapp.com/api/features/add-features", values)
      .then(res => {
        console.log("Web Backend Post Respones: ", res)
      })
      .catch(err => console.log("Error:", err.res));
  }
})(OptForm);
console.log("This is the HOC", FormikOptForm);
export default FormikOptForm;