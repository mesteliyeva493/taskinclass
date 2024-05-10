import React from 'react'
import { Formik, Form, Field } from 'formik';
import controller from '../../../services'
import productSchema from '../../../validations/product.validation'
import { endpoints } from '../../../services/constansts'
import { useNavigate } from 'react-router-dom'

export const AddProducts = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          description: '',
          imgSrc: '',
          costPrice: '',
          profileImg: '',
          balance: '',
        }}
        validationSchema={productSchema}
        onSubmit={values => {
          controller.post(endpoints.products, values)
            .then(() => navigate("/admin/addProduct"))
        }}
      >
        {({ errors, touched }) => (
          <Form className='FormUser'>

            <Field className='userf' name="name" placeholder="name" />
            {errors.name && touched.name ? (
              <div>{errors.name}</div>
            ) : null}
            <Field className='userf' name="description" placeholder="description" />
            {errors.description && touched.description ? (
              <div>{errors.description}</div>
            ) : null}
            <Field className='userf' name="imgSrc" placeholder="imgSrc" />
            {errors.imgSrc && touched.imgSrc ? (
              <div>{errors.imgSrc}</div>
            ) : null}
            <Field className='userf' name="costPrice" placeholder="costPrice" />
            {errors.costPrice && touched.costPrice ? (
              <div>{errors.costPrice}</div>
            ) : null}
            <Field className='userf' name="salePrice" placeholder="salePrice" />
            {errors.salePrice && touched.salePrice ? (
              <div>{errors.salePrice}</div>
            ) : null}
            <Field className='userf' name="balance" placeholder="balance" />
            {errors.balance && touched.balance ? (
              <div>{errors.balance}</div>
            ) : null}

            <Field className='userf' name="discountPercentage" placeholder="discountPercentage" />
            {errors.discountPercentage && touched.discountPercentage ? (
              <div>{errors.discountPercentage}</div>
            ) : null}

            <Field className='userf' name="stockCount" placeholder="stockCount" />
            {errors.stockCount && touched.stockCount ? (
              <div>{errors.stockCount}</div>
            ) : null}
            <button className='Button' type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default AddProducts