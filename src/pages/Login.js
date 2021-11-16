import React, {useState} from 'react';
import {
   useDispatch,
   useSelector
} from "react-redux";

import { Box } from "@mui/system";
import { 
   Button,
   TextField,
} from '@mui/material';
// bring in loginUser function from productsData.js
import { loginUser } from "../ProductsData";
// bring in loginaction created from store
import { loginActionCreator } from "../redux";


// create a Form component that takes props and returns a form
function Form(props) {
   // we will pass setError to the component form in the ternary below
   const { setError } = props;
   // useState to create credentials
   const [{email, password}, setCredentials] = useState({email: "", password: ""});

   // we have to declare useDispatch as dispatch for onSubmit
   const dispatch = useDispatch();

   // create onSubmit function for our form
   // here we use the loginUser function we imported
   const onSubmit = () => {
      loginUser(email, password)
         .then(user =>dispatch(loginActionCreator(user)))
         .catch(e => {
            console.log("error: ", e);
            setError(e.message)
         })
   };

   // create our form using material ui
   return (
      <Box>
         <Box mb={4}>
            <TextField 
               id="standard-basic"
               label="email"
               variant="standard"
               value={email}
               // this onChange will set the email
               onChange={
                  (e) => {
                     setCredentials({password, email: e.target.value})
                  }
               }
            />
         </Box>

         <Box mb={4}>
            <TextField 
               id="standard-basic"
               label="password"
               variant="standard"
               value={password}
               // this onChange will set the password
               onChange={
                  (e) => {
                     setCredentials({password: e.target.value, email})
                  }
               }
            />
         </Box>

         <Box>
            <Button onClick={onSubmit}>Login</Button>
         </Box>

      </Box>
   )
};

// TODO: make a user profile page

function Login() {
   // usestate to create Error messaging
   const [error, setError] = useState();

   // use react redux useSelector to grab the user in the state
   const user = useSelector(state => state.user);
   console.log("user")
   console.log(user)

   return (
      <div>
         {error}
         {/* make ternary that shows login form if no user in state, or user shipping info */}
         {
            user
               ? `Shipping Address here!`
               : <Form setError={setError}/>
         }
      </div>
   )
}

export default Login
