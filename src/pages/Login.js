import React, {useState} from 'react';
import {
   useDispatch,
   useSelector
} from "react-redux";

// create a Form component that takes props and returns a form

function Form(props) {
   // useState to create credentials
   const [{email, password}, setCredentials] = useState({email: "", password: ""});
}

function Login() {
   return (
      <div>
         
      </div>
   )
}

export default Login
