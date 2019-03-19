import React from "react";
import "./Buybutton.css"; 

function Buybutton(props) {
  return (
    <span className="btn buy-btn" role="button" onClick={() => props.buyitem(props._id)} tabIndex="0" />
  );
}

export default Buybutton;
