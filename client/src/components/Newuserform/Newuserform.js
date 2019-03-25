import React from "react";
import "../../pages/Home/Home.css";


function Newuserform(props) {
  return (
    <div>
    <form className="signupSpacer">
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
          placeholder="Password"
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
          placeholder="@Email"
          id="email"
        />
        <input
          onChange={props.handleInputChange}
          value={props.location}
          name="location"
          type="text"
          className="form-control"
          placeholder="Nearest Subway"
          id="location"
        />
        <button onClick={props.handleNewUserFormSubmit} className="submitButton">
          Register
        </button>
      </div>
    </form>
    </div>
  );
}

export default Newuserform;