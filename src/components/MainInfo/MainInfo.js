import React from "react";
import './MainInfo.scss';
import MyImageSvg from '../../assets/logo.svg';


const MainInfo = () => {
    return (
        <div className="MainInfo">
            <div className="MainInfo__logo-container">
                <img src={MyImageSvg}  alt='TO THE MARS'/>
            </div>

            <h1 className="MainInfo__h1">DeFi платформа <br />на Binance Smart Chain</h1>

            <h2 className="MainInfo__h2">Получай пассивный доход от 96% <br />годовых c TO THE MARS</h2>

            <div className="MainInfo__button-container">
                <a href="https://mars.tothemars.finance/auth/signup/?refId=481468777" target="_blank">Полетели на MARS</a>
            </div>
        </div>
    );
}

export default MainInfo;
