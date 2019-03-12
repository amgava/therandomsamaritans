import React from 'react';
import "./Home.css";

function LoginSignup() {
    return (
        <div className="wrapper">
            <span className="signupSpacer">
            <form className="signupBody" id="signup-form" action="submit" method="post"
                data-form-title="Contact Form"><input type="hidden" data-form="true" className="hideMe" />
                <div className="row">
                    <div className="col" data-for="firstname">
                        <div className="form-group">
                            <label className="form-control-label" for="firstname-form1-2w">First Name</label>
                            <input type="text" className="form-control" name="firstname" data-form-field="FirstName" placeholder="First name (required)"
                                required="required" id="firstname-form1-2w" />
                        </div>
                    </div>
                    <div className="col" data-for="lastname">
                        <div className="form-group">
                            <label className="form-control-label" for="lastname-form1-2w">Last Name</label>
                            <input type="text" class="form-control" name="lastname" data-form-field="LastName" placeholder="Last name (required)"
                                required="required" id="lastname-form1-2w" />
                        </div>
                    </div>
                    <div className="col" data-for="email">
                        <div className="form-group">
                            <label className="form-control-label" for="email-form1-2w">Email</label>
                            <input type="email" class="form-control" name="email" data-form-field="Email" required="required"
                                placeholder="Your email (required)" id="email-form1-2w" />
                        </div>
                    </div>
                    <div className="col" data-for="password">
                        <div className="form-group">
                            <label className="form-control-label" for="password-form1-2w">Password</label>
                            <input type="text" class="form-control" name="password" data-form-field="Password" placeholder="Password (required)"
                                required="required" id="password-form1-2w" />
                        </div>
                    </div>                 
                    <div className="col" data-for="confirmpassword">
                        <div className="form-group">
                            <label className="form-control-label" for="confirmpassword-form1-2w">Confirm Password</label>
                            <input type="text" class="form-control" name="confirmpassword" data-form-field="ConfirmPassword" placeholder="Confirm Password (required)"
                                required="required" id="confirmpassword-form1-2w" />
                        </div>
                    </div>
                </div>
                <div className="input-btn">
                    <button href="" type="submit" className="submitButton">Register</button>
                </div>
            </form>
        </span>

        </div>
    );
}

export default LoginSignup;