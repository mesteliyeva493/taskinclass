import React, { useContext } from 'react'
import { Helmet } from "react-helmet";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import mainContext from '../Context/Context';
import { useNavigate } from "react-router-dom";
function Add() {
  const { data, setData } = useContext(mainContext)

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: '',
      img: '',
      price: '',
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required('Required'),
      img: Yup.string()
        .url()
        .required('Required'),
      price: Yup.number().required('Required'),
    }),
    onSubmit: async (values) => {
      console.log(values)
      try {
        await axios.post('http://localhost:5050/api/product', values)
        setData([...data, values])

        navigate("/")
        formik.resetForm()

      } catch (err) {
        console.log(err)
      }
    },
  });
  return (
    <div>

      <Helmet>
        <title>Add</title>
      </Helmet>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="title">title</label>
        <input
          placeholder='title'
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
          <div>{formik.errors.title}</div>
        ) : null}

        <label htmlFor="img">img</label>
        <input
          id="img"
          name="img"
          type="url"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.img}
        />
        {formik.touched.img && formik.errors.img ? (
          <div>{formik.errors.img}</div>
        ) : null}

        <label htmlFor="price">price </label>
        <input
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
        />
        {formik.touched.price && formik.errors.price ? (
          <div>{formik.errors.price}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>


    </div>
  )
}

export default Add