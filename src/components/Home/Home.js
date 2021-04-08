import React from "react";
import './Home.scss';
import MainInfo from "../MainInfo/MainInfo";

function Home() {
    return (
        <div className="Home">
            <div className="Home__content">
                <MainInfo />
                <div></div>
            </div>
        </div>
    );
}

export default Home;
