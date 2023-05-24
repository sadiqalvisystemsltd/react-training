import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { ToastContainer, toast } from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css'; 
import { useFormik } from 'formik';
import * as yup from 'yup';

function Login(props) {
    const [blockedUsernames, setBlockedUsernames] = React.useState([]);
    const [usernameAttempts, setUsernameAttempts] = React.useState({});

    const ALLOWED_ATTEMPTS = 3;
    const validationSchema = yup.object({
      password: yup
        .string('Enter your password')
        .required('Password is required'),
      username: yup
        .string('Enter your username')
        .required('Username is required'),
    });

    const formik = useFormik({
      initialValues: {
        password: '',
        username: '',
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        if(blockedUsernames.includes(values["username"])) {
            toast.error("Username: "+values["username"]+" is blocked.");
            return;
        }
        const loginResponse = props.onLoginHandler(values["username"], values["password"]);
        if(loginResponse == "SUCCESS") {
            props.onLoginSignupSuccess();
            setUsernameAttempts({});
        } else {
            toast.error("Please enter valid credentials");
            var attempts = usernameAttempts[values["username"]];
            if(attempts) {
              if(attempts >= ALLOWED_ATTEMPTS - 1){
                  setBlockedUsernames([...blockedUsernames, values["username"]]);
              }
              usernameAttempts[values["username"]] = attempts + 1;
            } else {
              usernameAttempts[values["username"]] = 1;
            }
        }
      },
    });

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
          <Button type="submit"
            className="mt-2">
            Login
          </Button>
        </form>
        </div>
        <ToastContainer />    
        </div>
    )
}

export default Login;