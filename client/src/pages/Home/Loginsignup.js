import React from 'react';
import "./Home.css";

function LoginSignup() {
    return (
        <div className="wrapper">
            <span className="signupSpacer">
            <form className="mbr-form shadow-lg alert-dark" id="contact-form" action="https://formspree.io/thegreenmajority@gmail.com" method="post"
                data-form-title="Contact Form"><input type="hidden" data-form="true" className="hideMe" />
                <div className="row row-sm-offset">
                    <div className="col-sm-6 multi-horizontal" data-for="firstname">
                        <div className="form-group">
                            <label className="form-control-label mbr-fonts-style display-7" for="name-form1-2w">First Name</label>
                            <input type="text" className="form-control" name="firstname" data-form-field="FirstName" placeholder="First name (required)"
                                required="required" id="name-form1-2w" />
                        </div>
                    </div>
                    <div className="col-sm-6 multi-horizontal" data-for="lastname">
                        <div className="form-group">
                            <label className="form-control-label mbr-fonts-style display-7" for="name-form1-2w">Last Name</label>
                            <input type="text" class="form-control" name="lastname" data-form-field="LastName" placeholder="Last name (required)"
                                required="required" id="name-form1-2w" />
                        </div>
                    </div>
                    <div className="col-sm-6 multi-horizontal" data-for="email">
                        <div className="form-group">
                            <label className="form-control-label mbr-fonts-style display-7" for="email-form1-2w">Email</label>
                            <input type="email" class="form-control" name="email" data-form-field="Email" required="required"
                                placeholder="Your email (required)" id="email-form1-2w" />
                        </div>
                    </div>
                </div>
                <div className="input-group-btn p-2 pt-3 mx-5">
                    <button href="" type="submit" className="btn btn-secondary btn-form btn-block display-4">Register</button>
                </div>
            </form>
        </span>

        </div>
    );
}

export default LoginSignup;