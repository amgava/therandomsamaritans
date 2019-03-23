import React from 'react';
import "./footer.css";

function Footer() {
    return (
        <div className="App-footer">
           <strong><img className="logocomet2" alt="homelink" src={require('./commetpink2.png') } /></strong>
           <strong><img className="fabook" alt="homelink" src={require('./fabook.png') } /></strong>
           <strong><img className="instagram" alt="homelink" src={require('./instagram.png') } /></strong>
           <strong><img className="twit" alt="homelink" src={require('./twit.png') } /></strong>
           <i class="fab fa-instagram"></i>
        </div>
    );
}

export default Footer;