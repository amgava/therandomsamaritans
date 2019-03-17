import React from "react";
import "./Buybutton.css"; 

function Buybutton(props) {
  return (
    <span className="buy-btn" role="button" tabIndex="0">
      <button className="buyLink" onClick={() => props.savebook(props.title, props.author, props.link)}></button>
    </span>
  );
}

export default Buybutton;
