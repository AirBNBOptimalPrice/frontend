import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
// Form - takes care of handleSubmit and handleReset
import * as Yup from "yup";
import axios from "axios";
import './priceforms.css'

//destructured props to use props we want 
// onchange{handlechange}, is a prop from Formik captures what is entered in fields
const PriceForm = ({ values, errors, touched, status }) => {
  const [ info, setInfo] = useState([]);
  useEffect(() => {
    if (status) {
      setInfo([...info, status]);
    }
  }, [status]);


  return (
    <div className="animal-form">
      <Form> 
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

        <Field component="select" className="accommodates" name="accommodates">
          <option>Tpye of Accomodation</option>
          <option value="entire">Entire home/apt</option>
          <option value="Private room">Private room</option>
          <option value="Shared room">Shared room</option>
        </Field>

        <label>
        Number of Guests
        <Field type="number" name="guests_included" placeholder="1" />
        {touched.numPeople && errors.numPeople && (
          <p className="guests_included">{errors.numPeople}</p>
        )}
        </label>

        <label>
         Accepts Extra Guests
          <Field
            type="checkbox"
            name="extra_people"
            checked={values.extra_people}
          />
        </label>
        
        <label>
        Charge for extra guests 
        <Field type="number" name="extra_people" placeholder="0" />
        </label>

        <label>
        Bathrooms
        <Field type="number" name="bathrooms" placeholder="Number of Bathrooms" />
        {touched.bathrooms && errors.baths && (
          <p className="bathrooms">{errors.baths}</p>
        )}
         </label>

        <label>
        Beds
        <Field type="number" name="bedrooms" placeholder="Number of bedrooms" />
        {touched.beds && errors.beds && (
          <p className="bedrooms">{errors.beds}</p>
        )}
        </label>

        <Field type="number" name="security_deposit" placeholder="Security Deposit" />
        {touched.security && errors.security && (
          <p className="security_deposit">{errors.security}</p>
        )}

        <label>
        Cleaning Fee
        <Field type="number" name="cleaning_fee " placeholder="Cleaning Fee" />
        {touched.cleaning && errors.cleaning && (
          <p className="cleaning_fee ">{errors.cleaning}</p>
        )}
        </label>

        <label>
        Minimum nights stay
        <Field type="number" name="minimum_nights" placeholder="1" />
        </label>

        <Field component="select" className="cancellation_policylation_policy" name="cancellation_policylation_policy">
          <option>cancellation_policylation Policy</option>
          <option value="strict">strict_14_with_grace_period</option>
          <option value="flexible">flexible</option>
          <option value="moderate">moderate</option>
          <option value="super_strict_30">super_strict_30</option>
          <option value="super_strict_60">super_strict_60</option>
        </Field>

        <label>
        Bed Type
        <Field component="select" className="bedType" name="bedType">
          <option>Bed Type</option>
          <option value="Real Bed">Real Bed</option>
          <option value="Pull-out Sofa">Pull-out Sofa</option>
          <option value="Futon">Futon</option>
          <option value="Couch">Couch</option>
          <option value="Airbed">Airbed</option>
        </Field>
        </label>

        <label>
          Instant Bookable
          <Field
            type="checkbox"
            name="instant_bookable"
            checked={values.instant_bookable}
          />
        </label>
        <label>
          Business Ready Travel
          <Field
            type="checkbox"
            name="is_business_travel_ready"
            checked={values.is_business_travel_ready}
          />
        </label>
        <label>
          Cable TV
          <Field
            type="checkbox"
            name="TV_cable"
            checked={values.tvcable}
          />
        </label>
        <label>
            Internet/Wifi
          <Field
            type="checkbox"
            name="internet"
            checked={values.internet}
          />
        </label>

        <label>
          Pets Allowed
          <Field
            type="checkbox"
            name="pets"
            checked={values.pets}
          />
        </label>
        <button>Submit!</button>
      </Form> 
      {info.map(e => {
          console.log(e);
          return(
        <ul key={e.id}>
          <li>guests:{e.numPeople}</li>
          <li>Size: {e.beds}</li>
          <li>Diet: {e.baths}</li>
          <li>neighborhood: {e.neighborhood}</li>
        </ul>)
      })}
    </div>
  );
};
const FormikOptForm = withFormik({
   
  mapPropsToValues({ neighbourhood_group_cleansed, property_type, guests_included, numPeople, extra_people, bathrooms,
    bedrooms, security_deposit, cleaning_fee , minimum_nights, cancellation_policy, bedType, instant_bookable, is_business_travel_ready, TV_cable, internet, rooms, pets }) {
    return {
        neighbourhood_group_cleansed: neighbourhood_group_cleansed || "",  //predefined field(ex. email already in field) or empty
     property_type: property_type || "",
      guests_included: guests_included || "",
      numPeople: numPeople || 1,
      extra_people: extra_people || "",
      extra_people: extra_people || 0,
      bathrooms: bathrooms || "",
      bedrooms: bedrooms || "",
      security_deposit: security_deposit || "",
      cleaning_fee : cleaning_fee  || "",
      minimum_nights: minimum_nights || 1, //predefined fields
      cancellation_policy: cancellation_policy || "",
      bedType: bedType || "",
      instant_bookable: instant_bookable || "",
      is_business_travel_ready: is_business_travel_ready || "",
      TV_cable: TV_cable || "",
      internet: internet || "",
      rooms: rooms || "",
      pets: pets || "",
    };
  },
  validationSchema: Yup.object().shape({
    numPeople: Yup.string().required("Please specify max number of guests"),
    baths: Yup.string().required("Please specify max number of bathrooms"),
    beds: Yup.string().required("Please specify number of beds"),
    pets: Yup.bool().oneOf([true], 'Field must be checked')
    
    
  }),
  //You can use this to see the values
  handleSubmit(values, { setStatus }) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err.res));
  }
})(PriceForm); //takes in Priceform and returns FormikOptForm
console.log("This is the HOC", FormikOptForm);
export default FormikOptForm;