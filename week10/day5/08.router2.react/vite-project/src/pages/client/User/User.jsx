import React from 'react'
import { Formik, Form, Field } from 'formik'
import controller from '../../../services'
import userSchema from '../../../validations/user.validation'
import{endpoints} from '../../../services/constansts'
import {useNavigate} from 'react-router-dom'

export const UserF=()=>{ 
  const navigate = useNavigate();
  return(

    <div>
      <Formik
        initialValues={{
          username: '',
          password: '',
          confirmPassword: '',
          email: '',
          profileImg: '',
          balance:'',
        }}
        validationSchema={userSchema}
        onSubmit={values => {
          controller.post(endpoints.users,values)
          .then(()=>navigate("/clinet/register"))
        }}
      >
        {({ errors, touched }) => (
          <Form className='FormUser'>

              <Field  className='userf'  name="username" placeholder="username"/>
            {errors.username && touched.username ? (
              <div>{errors.username}</div>
            ) : null}
            <Field  className='userf'  name="password" placeholder="password"/>
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
             <Field  className='userf'  name="confirmPassword"placeholder="confirmPassword" />
            {errors.confirmPassword && touched.confirmPassword ? (
              <div>{errors.confirmPassword}</div>
            ) : null}
             <Field  className='userf'  name="email"placeholder="email" />
            {errors.email && touched.email ? (
              <div>{errors.email}</div>
            ) : null}
              <Field  className='userf'  name="profileImg" placeholder="url"/>
            {errors.profileImg && touched.profileImg ? (
              <div>{errors.profileImg}</div>
            ) : null}
              <Field  className='userf'  name="balance" placeholder="balance" />
            {errors.balance && touched.balance ? (
              <div>{errors.balance}</div>
            ) : null}
            <button className='Button' type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )

}

export default UserF