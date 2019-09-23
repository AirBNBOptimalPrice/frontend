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
        <Field type="text" name="zipcode" placeholder="Zip Code" />
        {touched.zipcode && errors.zipcode && (
          <p className="error">{errors.zipcode}</p>
        )}

        {touched.size && errors.size && <p className="error">{errors.size}</p>}
        <Field component="select" className="propertytype" name="propertytype">
          <option>Property Type</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="hostel">Hostel</option>
        </Field>
        <Field component="select" className="rooms" name="rooms">
          <option>Number of Rooms</option>
          <option value="Studio">Studio</option>
          <option value="1bed">1 Bedroom</option>
          <option value="2bed">2 Bedroom</option>
          <option value="3bed">3 Bedroom</option>
          <option value="3+bed">3+ Bedroom</option>
        </Field>
        <Field component="select" className="size" name="size">
          <option>Property Size, square feet</option>
          <option value="Studio">Less than 200</option>
          <option value="1bed">Less than 500</option>
          <option value="2bed">Less than 1000</option>
          <option value="3bed">Less than 1500</option>
          <option value="3+bed">Greater than 2000</option>
        </Field>
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
   
  mapPropsToValues({ zipcode, size, propertytype, rooms, pets, notes }) {
    return {
      zipcode: zipcode || "",  //predefined field(ex. email already in field) or empty
      size: size || "", //matches Field.name
      propertytype: propertytype || "",
      rooms: rooms || "",
      pets: pets || false,
      notes: notes || ""
    };
  },
  validationSchema: Yup.object().shape({
    species: Yup.string().required("You must put a species"),
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