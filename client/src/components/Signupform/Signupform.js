import React from "react";
import "../../pages/Home/Home.css";

function Signupform(props) {
  return (
      <form className="sign-up-form">
        <div className="signupform-input">
          <input
            onChange={props.handleInputChange}
            value={props.firstName}
            name="firstName"
            type="text"
            className="form-control"
            placeholder="First Name"
            id="firstName"
          />
          <input
            onChange={props.handleInputChange}
            value={props.lastName}
            name="lastName"
            type="text"
            className="form-control"
            placeholder="Last Name"
            id="lastName"
          />
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
          <input
            onChange={props.handleInputChange}
            value={props.confirmpassword}
            name="confirmpassword"
            type="text"
            className="form-control"
            placeholder="Confirm Password"
            id="confirmpassword"
          />
          <button onClick={props.handleFormSubmit} className="submitButton">
            Register
        </button>
        </div>
      </form>
  );
}

export default Signupform;