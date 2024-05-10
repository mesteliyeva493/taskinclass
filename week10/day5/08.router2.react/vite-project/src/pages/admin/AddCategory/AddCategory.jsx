import React from 'react'
import { Formik, Form, Field } from 'formik';
import controller from '../../../services';
import categorySchema from '../../../validations/category.validation';
import{endpoints} from '../../../services/constansts'
import {useNavigate} from 'react-router-dom'

export const AddCategory=()=>{ 
  const navigate = useNavigate();
  return(
    
    <div>
      <Formik
        initialValues={{
          name: '',
        
        }}
        validationSchema={categorySchema}
        onSubmit={values => {
          controller.post(endpoints.categories,values)
          .then(()=>navigate("/admin/addCategory"))
        }}
      >
        {({ errors, touched }) => (
          <Form className='FormUser'>
              <Field  className='userf'  name="name" placeholder="name"/>
            {errors.name && touched.name ? (
              <div>{errors.name}</div>
            ) : null}
            <button className='Button' type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )

}

export default AddCategory