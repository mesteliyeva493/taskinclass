import React from 'react';
import { Formik, Form, Field } from 'formik';
import AddcountrySchema from '../../../validations/addcountry.validation';
import controller from '../../../services';
import { endpoints } from '../../../services/constansts';
import { useNavigate } from "react-router-dom";
export const AddCountry = () =>{
  const navigate = useNavigate();
  return(

    <div>
      <Formik
        initialValues={{
          name: '',
          capital: '',
          flagImg: '',
          population: '',
          description: '',
        }}
        validationSchema={AddcountrySchema}
        onSubmit={values => {
          controller.post(endpoints.countries,values)
          .then(()=>navigate("/admin/country"))
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="name" />
            {errors.name && touched.name ? (
              <div>{errors.name}</div>
            ) : null}
            <Field name="capital" />
            {errors.capital && touched.capital ? (
              <div>{errors.capital}</div>
            ) : null}
             <Field name="flagImg" />
            {errors.flagImg && touched.flagImg ? (
              <div>{errors.flagImg}</div>
            ) : null}
             <Field name="population" />
            {errors.population && touched.population ? (
              <div>{errors.population}</div>
            ) : null}
              <Field name="description" />
            {errors.description && touched.description ? (
              <div>{errors.description}</div>
            ) : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )

}

;

export default AddCountry