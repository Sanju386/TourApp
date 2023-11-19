import React, { useContext, useEffect, useState } from "react";
import TourItem from "./TourItem";
import { AppContext } from "./Context";

const Tour = () => {

const [state,dispatch] = useContext(AppContext)
const{tours,loader} = state



  const fetchData = async () => {
    // setLoader(true)
  dispatch({type:"SETLOADER",payload: true})

    const response = await fetch("https://course-api.com/react-tours-project");

    const dataList = await response.json();
   


    // setTours(dataList);

dispatch({type:"SETTOUR",payload: dataList})
 // setLoader(false)
 dispatch({type:"SETLOADER",payload: false})

  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    
    fetchData();
  };

  return (
    <main>
      {loader ? <span className="loader"></span> : (
        <section>
          <div className="title">
            <h2>{tours.length ? "My TripPlan" : "No Tours Left"} </h2>
            <div className="title-underline"></div>

            {!tours.length ? (
              <button onClick={handleRefresh} className="btn">
                Refresh
              </button>
            ) : null}
          </div>

          <div className="tours">
            {tours.map((item) => {
              return (
                <div>
                  <TourItem item={item}  />
                </div>
              );
            })}
          </div>
        </section>
      )  
        
      }
    </main>
  );
};

export default Tour;
