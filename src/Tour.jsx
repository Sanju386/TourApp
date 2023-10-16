import React, { useEffect, useState } from "react";
import TourItem from "./TourItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Tour = () => {
  const [tours, setTours] = useState([]);
  console.log(tours);

  const [data, setData] = useState([]);
  console.log(data)

  const fetchData = async () => {
    const response = await fetch("https://course-api.com/react-tours-project");

    const dataList = await response.json();
    setData(dataList);

    setTours(dataList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    setTours(data);
  };

  return (
    <main>
      <section>
        <div className="title">
          <h2>{tours.length ? "Our Tours" : "No Tours Left"} </h2>
          <div className="title-underline"></div>

          {!tours.length ? (
            <button onClick={handleRefresh} className="btn">
              Refresh
            </button>
          ) : null}
        </div>


       
        

        <div className="tours">
          {tours.map((item) => {
            return<div> <TourItem item={item} setTours={setTours} /> 
            <FontAwesomeIcon icon="spinner-third" />
            </div>
            ;
          })}
        </div>
      </section>
    </main>
  );
};

export default Tour;
