import React, {useState, useEffect, useReducer} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

import { ShoppingBagContext } from "./context/ShoppingBagContext"; //brings in the Shopping Bag Context we created
import { fetchProducts } from "./ProductsData"; //brings in our mock data

// import Provider from react-redux
import { Provider as ReduxProvider } from "react-redux";
// import our store file
import store from "./redux";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ShoppingBag from "./pages/ShoppingBag";
import Login from "./pages/Login";

import './App.css';

// we use this object so that we avoid any syntax errors in our dispatch
export const ACTIONS = {
  ADD_TO_BAG: "add-to-bag",
  DELETE_FROM_BAG: "delete-from-bag",
  EMPTY_BAG: "empty-bag",
};

function reducer(productsInBag, action) {
  // the add to bag needs to account for multiple selections
  // todo, add products that are same into same object
  if(action.type === ACTIONS.ADD_TO_BAG) {
    return [...productsInBag, addNewItem(action.payload)]
  }

  if(action.type === ACTIONS.DELETE_FROM_BAG) {
    return productsInBag.filter(product => product.id !== action.payload.id);
  }

  if(action.type === ACTIONS.EMPTY_BAG) {
    return productsInBag = [];
  }
};

// create a function that will return the item's image, name, and price in an object
function addNewItem(product){
  return {
    id: uuidv4(), //we give the product an individual title
    title: product.title,
    price: product.price,
    img: product.img,
  }
}

function App() {
  const bagInLocalStorage = window.localStorage.getItem("shoppingBag")
  // check if we already have products in the shopping bag if not set it to empty array
  const initialShoppingBag = bagInLocalStorage ? JSON.parse(bagInLocalStorage) : [];

  //===================
  const [productsInBag, dispatch] = useReducer(reducer, initialShoppingBag); //this will populate as we add items to our bag
  const [productList, setProductList] = useState([]);

  //===================

  useEffect(() => {
    fetchProducts()
      .then((products) =>{
        setProductList(products)
      });
    
    window.localStorage.setItem('shoppingBag', JSON.stringify(productsInBag))
  }, [productsInBag]);

  // we will pass down this function to the home page so when we add to bag, we update the productsInBag data
  const addToBag = (product) =>{
    dispatch({type: ACTIONS.ADD_TO_BAG, payload: product})
  };

  const removeFromBag = (product) => {
    dispatch({type: ACTIONS.DELETE_FROM_BAG, payload: product})
  };

  const emptyBag = (productsInBag) => {
    dispatch({type: ACTIONS.EMPTY_BAG, payload: productsInBag})
  }

  const shoppingBagProviderValue = {
    productList,
    productsInBag,
    addToBag,
    removeFromBag,
    emptyBag,
  };

  return (
    // our redux store is now available to all of our app!
    <ReduxProvider store={store}>
      <ShoppingBagContext.Provider value={shoppingBagProviderValue}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bag" element={<ShoppingBag />} />
            <Route path="/login" element={<Login />}/>
          </Routes>
        </Router>
      </ShoppingBagContext.Provider>
    </ReduxProvider>
  );
}

export default App;
