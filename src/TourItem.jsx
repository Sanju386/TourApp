import React, { useContext } from "react";
import { useState } from "react";
import { AppContext } from "./Context";

const TourItem = ({ item: { id, image, name, price, info } }) => {

  const [expand, setExpand] = useState(false);

 const [state, dispatch] =  useContext(AppContext)


  const handleClick = (id) => {


    // setTours((prev) => {
    //   return prev.filter((ele) => {
    //     return ele.id !== id;
    //   });
    // });
   
    dispatch({type:"CLEARDATA", payload: id})

  };

  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <article key={id} className="single-tour">
      <img src={image} alt="Best of Paris in 7 Days Tour" className="img"></img>
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {expand ? info : info.substring(0, 200)}
          <button onClick={handleExpand} className="info-btn">
          
            {expand ? "Show Less" : "Read More"}
          </button>
        </p>
        <button
          onClick={() => handleClick(id)}
          className="delete-btn btn-block btn"
        >
          not interested
        </button>
      </div>
    </article>
  );
};

export default TourItem;
