import React from "react";
import "./Buybutton.css"; 

function Buybutton(props) {
  return (
    <button className="btn btn-primary m-2" onClick={() => props.buyitem(props._id)} >Buy Now</button>
  );
}

export default Buybutton;
