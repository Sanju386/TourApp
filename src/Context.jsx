import React, { createContext, useReducer } from "react";
import { useState } from "react";
import { reducer } from "./reducer";

export const AppContext = createContext();

const Context = ({ children }) => {

    // const [tours, setTours] = useState([]);

    // const [loader, setLoader] = useState(false);

const initialState = {
    tours: [],
    loader: false,
    
}

  
const[state,dispatch] = useReducer(reducer,initialState)

// console.log(state)


  return <AppContext.Provider value={[state,dispatch]}>{children}</AppContext.Provider>;
};

export default Context;


