import React, {useContext} from 'react';
import { ShoppingBagContext } from '../context/ShoppingBagContext';
import { Box, AppBar, Toolbar, IconButton } from "@material-ui/core";
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import { Link } from "react-router-dom";
import { Typography } from '@mui/material';

function NavBar() {
   const {
      productsInBag
   } = useContext(ShoppingBagContext);

   return (
      <Box>
         <AppBar 
            position="static"
            style={{
               background:"black"
            }}
         >
            <Toolbar
               style={{
                  display: "flex",
               }}
            >
               <Link to="/" style={{width: "33%"}}>
                  <img 
                     src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-what-you-need-know-before-rebranding-11.png"
                     alt="apple logo"
                     width="70px"
                     height="70px"
                  />
               </Link>
               <Typography style={{textAlign:"center", width: "33%"}}>
                  Apple Store
               </Typography>
               <Link 
                  to="/bag" 
                  style={{
                     width: "33%",
                     display: "flex",
                     justifyContent:"end",
                     textDecoration: "none"
                  }}
               >  
                  <IconButton size="medium" style={{color: "white"}} edge="end" aria-label="menu">
                     <LocalMallSharpIcon style={{fontSize:"50px"}} position="end"/>
                     <Typography style={{display:"flex", justifyContent:"end" , alignItems:"end", marginRight:"-5px"}}>
                        {productsInBag.length > 0 && productsInBag.length}
                     </Typography>
                  </IconButton>
               </Link>
            </Toolbar>
         </AppBar>
      </Box>
   )
}

export default NavBar;
