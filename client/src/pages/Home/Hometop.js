import React from 'react';
import "./Home.css";


function Hometop(props) {
    return (
        <div className="homepageToggleBar" >
            <button onClick={() => props.togglepagestate()} className="pageToggleButton">
                Toggle Login Page/ Sign-Up Page
          </button>
        </div>
    );
}

export default Hometop;