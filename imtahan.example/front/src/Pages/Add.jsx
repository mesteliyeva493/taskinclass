import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import mainContext from "../Context/Context";






const Add = () => {
const { data, setData } = useContext(mainContext)

  const formik = useFormik({
    initialValues: {
      name: '',
      img: '',
      describtion: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
   
      img: Yup.string().url().required('Required'),
    
      describtion: Yup.string().required('Required'),
    }),
    onSubmit:async(values) => {
      await axios.post("http://localhost:4048/api/clothes", values).then(res=>{
        setData([...data, res.data])
        formik.resetForm
      })
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
         <Helmet>
<title>Add</title>
</Helmet>
      <label htmlFor="name"> Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
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

      <label htmlFor="describtion">Desc</label>
      <input
        id="describtion"
        name="describtion"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.describtion}
      />
      {formik.touched.describtion && formik.errors.describtion ? (
        <div>{formik.errors.describtion}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Add;
