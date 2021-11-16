import React, {useContext} from 'react';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from "@mui/icons-material/Delete";
import {ShoppingBagContext} from "../context/ShoppingBagContext"

function ShoppingBag() {
   const {
      productsInBag,
      removeFromBag,
      emptyBag
   } = useContext(ShoppingBagContext);

   const totalBagPrice = (arr) => {
      let totalPrice  = 0;
      arr.map((item => {
         totalPrice = totalPrice + item.price;
         return totalPrice;
      }));
      
      return totalPrice/100;
   };
   return (
      <div 
         style={{
            display:"flex",
            flexDirection:"column",
            justifyContent: "center"
         }}
      >
         <hr />
         <Stack>
         {productsInBag && productsInBag.map((product)=>{
            return (
               <Card 
                  key={product.id} 
                  sx={{maxWidth: 500}}
                  style={{
                     marginBottom:"30px",
                     display:"flex",
                     alignItems: "center",
                     justifyContent:"space-evenly"
                  }}
               >
                  <img src={product.img} alt={product.title} width="auto" height="50px"/>
                  <h4 style={{marginLeft:"5px"}}>{product.title}</h4>
                  <span style={{marginLeft:"5px"}}>{`$${product.price/100}`}</span>
                  <Button
                     variant="contained"
                     size="small"
                     color="error"
                     endIcon={<DeleteIcon />}
                     onClick={() => {
                        removeFromBag(product)
                     }}
                     style={{marginLeft:"5px"}}
                  >
                     Delete
                  </Button>
               </Card>
            )
         })}
         </Stack>
         <hr />
         <div style={{display:"flex", flexDirection:"column", alignItems:"end", marginRight:"20px"}}>
            <span style={{ marginBottom:"10px"}}>
               Total: {productsInBag.length > 0 ? `$${totalBagPrice(productsInBag)}` : `$0.00`}
            </span>
            <div>
               <Button 
                  size="medium"
                  variant="contained"
                  style={{
                     marginRight:"5px" 
                  }}
                  
               >
                  Checkout
               </Button>
               <Button 
                  size="medium"
                  variant="outlined"
                  onClick={()=> {
                     emptyBag()
                  }}
               >
                  Clear Bag
               </Button>

            </div>
            
         </div>
      </div>
   )
}

export default ShoppingBag;
