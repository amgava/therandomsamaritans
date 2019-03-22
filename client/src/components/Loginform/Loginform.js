import React from "react";
import "../../pages/Home/Home.css";

function Loginform(props) {
  return (
      <form className="signupSpacer">
        <div className="signupform-input">
          <input
            onChange={props.handleInputChange}
            value={props.email}
            name="email"
            type="text"
            className="form-control"
            placeholder="email"
            id="email"
          />
          <input
            onChange={props.handleInputChange}
            value={props.password}
            name="password"
            type="text"
            className="form-control"
            placeholder="password"
            id="password"
          />
          <button onClick={props.handleLoginFormSubmit} className="submitButton">
            Login
        </button>
        </div>
      </form>
  );
}

export default Loginform;