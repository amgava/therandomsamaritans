import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";

function Hometop() {
    return (
        <div className="wrapper">
            <p className="alreadyMember">Already a member? Click <Link to={'/login'}>here</Link> to login.</p>
        </div>
    );
}

export default Hometop;