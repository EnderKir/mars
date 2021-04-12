import React from "react";
import './Home.scss';
import MainInfo from "../MainInfo/MainInfo";
import MainDescription from "../MainDescription/MainDescription";
import HowToStart from "../HowToStart/HowToStart";

function Home() {
    return (
        <div className="Home">
            <div className="Home__content">
                <MainInfo />

                <MainDescription />
            </div>

            <HowToStart />
        </div>
    );
}

export default Home;
