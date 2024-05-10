import React from 'react'
import { Formik, Form, Field } from 'formik';
import controller from '../../../services'
import messSchema from '../../../validations/message.validation';
import { endpoints } from '../../../services/constansts'
import { useNavigate } from 'react-router-dom'


export const Messages = () => {
  const navigate = useNavigate();
  return (

    <div>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          title: '',
          message: ''
        }}
        validationSchema={messSchema}
        onSubmit={values => {
          controller.post(endpoints.messages, values)
            .then(() => navigate("/clinet/contactUs"))
        }}
      >
        {({ errors, touched }) => (
          <Form className='FormUser'>

            <Field className='userf' name="fullName" placeholder="fullName" />
            {errors.fullName && touched.fullName ? (
              <div>{errors.fullName}</div>
            ) : null}
            <Field className='userf' name="email" placeholder="email" />
            {errors.email && touched.email ? (
              <div>{errors.email}</div>
            ) : null}
            <Field className='userf' name="title" placeholder="title" />
            {errors.title && touched.title ? (
              <div>{errors.title}</div>
            ) : null}
            <Field className='userf' name="message" placeholder="message" />
            {errors.message && touched.message ? (
              <div>{errors.message}</div>
            ) : null}

            <button className='Button' type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Messages