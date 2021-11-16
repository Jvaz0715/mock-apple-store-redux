import { createStore } from "redux";

// these are the only actions allowed

const LOG_IN_ACTION = "LOG_IN";

// ACTION CREATER  that will be passed into dispatch

export const loginActionCreator = (user) => (
   {type: LOG_IN_ACTION, payload: {user}}
);

// create our log in reducer!

const reducer = (state, action) => {
   if (action.type === LOG_IN_ACTION) {
      // deconstruct the payload from action
      const {payload} = action;

      // update the state to the login user info
      return {...state, user: payload.user}
   }

   return state;
}

// our initialState should NOT have a user
const initialState = {user: undefined};

// create Redux Store that will be exported to App.js

const store = createStore(
   reducer,// we created this above
   initialState, //of user undefined
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//for use in chrome redux devtools;
);

// export the store
export default store;