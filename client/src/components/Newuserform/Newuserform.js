import React from "react";
import "../../pages/Home/Home.css";

function Newuserform(props) {
  return (
    <form className="sign-up-form">
      <div className="signupform-input">
        <input
          onChange={props.handleInputChange}
          value={props.firstname}
          name="firstname"
          type="text"
          className="form-control"
          placeholder="First Name"
          id="firstname"
        />
        <input
          onChange={props.handleInputChange}
          value={props.lastname}
          name="lastname"
          type="text"
          className="form-control"
          placeholder="Last Name"
          id="lastname"
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
          value={props.location}
          name="location"
          type="text"
          className="form-control"
          placeholder="Location"
          id="location"
        />
        
        <button onClick={props.handleNewUserFormSubmit} className="submitButton">
          Register
        </button>
      </div>
    </form>
  );
}

export default Newuserform;