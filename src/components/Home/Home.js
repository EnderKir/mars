import React from "react";
import './Home.scss';
import MainInfo from "../MainInfo/MainInfo";
import MainDescription from "../MainDescription/MainDescription";

function Home() {
    return (
        <div className="Home">
            <div className="Home__content">
                <MainInfo />

                <MainDescription />
            </div>
        </div>
    );
}

export default Home;
