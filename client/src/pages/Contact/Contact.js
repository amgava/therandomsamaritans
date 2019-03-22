import React from 'react';
import Footer from "../../components/Footer/Footer";
import "./Contact.css";


function Contact() {
    return (
        <div className="App-body">
        <h1 className="siteTitle"><strong>Contact Us</strong></h1>
            <div class="container">
            <div class="row">
                <div className="adressComet"class="col">
                <h5 className="deets">Yonge and Bloor Plaza<br />
                Phone: 416 555 5555 <br />
                www.comet.com</h5>
                </div>
                <div class="col">
                <img className="logomap" alt="homelink" src={require('./maparosa.png') } />
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;

