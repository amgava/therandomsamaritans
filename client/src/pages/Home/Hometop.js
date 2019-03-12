import React from 'react';
import "./Home.css";

function Hometop(props) {
    return (
        <div className="homepageToggleBar">
            <button onClick={props.togglePageState} className="pageToggleButton">
                Login/Sign-Up
          </button>
        </div>
    );
}

export default Hometop;