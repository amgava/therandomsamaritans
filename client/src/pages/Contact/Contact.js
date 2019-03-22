import React from 'react';
import Footer from "../../components/Footer/Footer";
import "./Contact.css";


function Contact() {
    return (
        <div className="App-body">
        <h1 className="siteTitle"><strong>CONTACT US</strong></h1>
           


            <div class="container">
            <div class="row">
                <div className="adressComet"class="col">
                <h3> Yonge and Bloor</h3>
                <h3>Cellphone: 416 767 456</h3>
                <h3>www.comet.com</h3>
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

