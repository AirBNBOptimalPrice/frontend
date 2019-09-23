import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
// Form - takes care of handleSubmit and handleReset
import * as Yup from "yup";
import axios from "axios";

//destructured props to use props we want 
// onchange{handlechange}, is a prop from Formik captures what is entered in fields
const PriceForm = ({ values, errors, touched, status }) => {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    if (status) {
      setAnimals([...animals, status]);
    }
  }, [status]);

  return (
    <div className="animal-form">
      <Form> 
      <Field component="select" className="neighborhood" name="neighborhood">
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
        

        
        <Field component="select" className="propertytype" name="propertytype">
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

        <Field component="select" className="accomoType" name="accomoType">
          <option>Tpye of Accomodation</option>
          <option value="entire">Entire home/apt</option>
          <option value="Private room">Private room</option>
          <option value="Shared room">Shared room</option>
        </Field>

        <Field type="number" name="numPeople" placeholder="Number of Guests" />
        {touched.numPeople && errors.numPeople && (
          <p className="numPeople">{errors.numPeople}</p>
        )}

        <label>
         Accepts Extra Guests
          <Field
            type="checkbox"
            name="extra_people"
            checked={values.extra_people}
          />
        </label>

        <Field type="number" name="price_extra_people" placeholder="Price per extra person." />
        

        <Field type="number" name="baths" placeholder="Number of Bathrooms" />
        {touched.baths && errors.baths && (
          <p className="baths">{errors.baths}</p>
        )}

        <Field type="number" name="beds" placeholder="Number of Beds" />
        {touched.beds && errors.beds && (
          <p className="beds">{errors.beds}</p>
        )}

        <Field type="number" name="security" placeholder="Security Deposit" />
        {touched.security && errors.security && (
          <p className="security">{errors.security}</p>
        )}

        <Field type="number" name="cleaning" placeholder="Cleaning Fee" />
        {touched.cleaning && errors.cleaning && (
          <p className="cleaning">{errors.cleaning}</p>
        )}

        <Field type="number" name="minNights" placeholder="Minimum Nigths Stay" />
        

        <Field component="select" className="cancel" name="cancel">
          <option>Cancellation Policy</option>
          <option value="strict">strict_14_with_grace_period</option>
          <option value="flexible">flexible</option>
          <option value="moderate">moderate</option>
          <option value="super_strict_30">super_strict_30</option>
          <option value="super_strict_60">super_strict_60</option>
        </Field>

        <Field component="select" className="bedType" name="bedType">
          <option>Bed Type</option>
          <option value="Real Bed">Real Bed</option>
          <option value="Pull-out Sofa">Pull-out Sofa</option>
          <option value="Futon">Futon</option>
          <option value="Couch">Couch</option>
          <option value="Airbed">Airbed</option>
 
        </Field>

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
            name="TVcable"
            checked={values.TVcable}
          />
        </label>
        <label>
            Internet/Wifi
          <Field
            type="checkbox"
            name="Internet/Wifi"
            checked={values.is_business_travel_ready}
          />
        </label>

        <label>
          Pets Allowed
          <Field
            type="checkbox"
            name="pets"
            checked={values.vaccinations}
          />
          
          <Field
            component="textarea"
            type="text"
            name="notes"
            placeholder="Notes" 
          />
        </label>
        <button>Submit!</button>
      </Form> 
      {animals.map(animal => (
        <ul key={animal.id}>
          <li>Species:{animal.species}</li>
          <li>Size: {animal.size}</li>
          <li>Diet: {animal.diet}</li>
        </ul>
      ))}
    </div>
  );
};
const FormikOptForm = withFormik({
   
  mapPropsToValues({ neighborhood,  size, propertytype, accomoType, numPeople, baths,
     beds, security, cleaning, minNights, cancel, bedType, rooms, pets, notes }) {
    return {
        neighborhood: neighborhood || "",  //predefined field(ex. email already in field) or empty
      size: size || "", //matches Field.name
      propertytype: propertytype || "",
      accomoType: accomoType || "",
      numPeople: numPeople || "",
      baths: baths || "",
      beds: beds || "",
      security: security || "",
      cleaning: cleaning || "",
      minNights: minNights || "",
      cancel: cancel || "",
      bedType: bedType || "",
      rooms: rooms || "",
      pets: pets || false,
      notes: notes || ""
    };
  },
  validationSchema: Yup.object().shape({
    numPeople: Yup.string().required("Please specify max number of guests"),
    baths: Yup.string().required("Please specify max number of bathrooms"),
    beds: Yup.string().required("Please specify number of beds"),
    size: Yup.string().required()
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