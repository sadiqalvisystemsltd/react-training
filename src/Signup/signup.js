import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { ToastContainer, toast } from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css'; 
import { useFormik } from 'formik';
import * as yup from 'yup';


function Signup(props) {
    

    const validationSchema = yup.object({
      email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
      password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
      username: yup
        .string('Enter your username')
        .required('Username is required'),
    });

    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
        username: '',
        address: '',
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        console.log("On Submit called")
        const signupResponse = props.onSignupSubmitHandler(values["username"], values["password"]);
        if(signupResponse == "USERNAME ALREADY EXISTS") {
            toast.error("Username already exists!")
        } else {
            props.onLoginSignupSuccess();
        }
      },
    });

    const onFileUpload = () => {

    };

    return(
      <div className='row justify-content-center align-items-center'>
      <div className='col-4'>
        <form onSubmit={formik.handleSubmit}>
          <TextField
              id="username"
              type="text"
              name="username"
              label="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
            <br/>
          <TextField
              id="email"
              type="email"
              name="email"
              label="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <br/>
          <TextField
              id="password"
              type="password"
              name="password"
              label="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <br/>
            <TextField
              id="address"
              type="text"
              name="address"
              label="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
            <br/><br/>
            CNIC: <input type="file" name="file" onChange={onFileUpload} />
            <br/>
          <Button type="submit"
            className="mt-2">
            Signup
          </Button>
        </form>
        </div>
        <ToastContainer />    
        </div>
    )
}

export default Signup;