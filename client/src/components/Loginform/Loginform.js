import React from "react";
import "../../pages/Home/Home.css";

function Loginform(props) {
  return (
    <div>
    <form className="signupSpacer">
      <div className="signupform-input">
        <input
          onChange={props.handleInputChange}
          value={props.email}
          name="email"
          type="text"
          className="form-control"
          placeholder="@Email"
          id="email"
        />
        <input
          onChange={props.handleInputChange}
          value={props.password}
          name="password"
          type="password"
          className="form-control"
          placeholder="Password"
          id="password"
        />
        <button onClick={props.handleLoginFormSubmit} className="submitButton">
          Login
        </button>
      </div>
    </form>
    </div>
  );
}

export default Loginform;