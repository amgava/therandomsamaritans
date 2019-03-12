import React from 'react';
import Hometop from "./Hometop";
import Loginsignup from "./Loginsignup";
import Footer from "../../components/Footer/Footer";

function Home() {
    return (
        <div className="App-body">
                <Hometop />
                <Loginsignup />
                <Footer />
        </div>
    );
}

export default Home;
