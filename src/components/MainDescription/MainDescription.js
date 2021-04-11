import React from "react";
import './MainDescription.scss';
import MarsCoin from "../../assets/tokens (1).svg";
import CashFlow from "../../assets/cash-flow.svg";
import Stock from "../../assets/stock-market.svg";
import MoneyFlow from "../../assets/money-flow.svg";


const MainDescription = () => {
    return (
        <div className="MainDescription">
            <div className="MainDescription__title">
                <div className="MainDescription__title-top">Бизнес TO THE MOON</div>
                <div className="MainDescription__title-bottom">Современные инновационные продукты, приносящие ежедневную прибыть</div>
            </div>

            <div className="descriptionBlock top-block">
                <div className="descriptionBlock__logo-container">
                    <img src={MarsCoin}  alt='MARS COIN' className="descriptionBlock__logo-container-image"/>
                </div>
                <div className="descriptionBlock__text-container">
                    <div className="descriptionBlock__text-container__title">Держатели MARS</div>
                    <div className="descriptionBlock__text-container__text">
                        Получают дивиденды 6-9% <br />ежемесячно от суммы MARS <br />отправленной в Stake.
                    </div>
                </div>
            </div>

            <div className="descriptionBlock top-block cash-block-desktop">
                <div className="descriptionBlock__logo-container">
                    <img src={MoneyFlow}  alt='Money Flow' className="descriptionBlock__logo-container-image-center"/>
                </div>
            </div>

            <div className="bottom-line">
                <div className="descriptionBlock bottom-left-block">
                    <div className="descriptionBlock__logo-container">
                        <img src={Stock}  alt='Stock' className="descriptionBlock__logo-container-image"/>
                    </div>
                    <div className="descriptionBlock__text-container">
                        <div className="descriptionBlock__text-container__title">Игровая платформа и нейросеть</div>
                        <div className="descriptionBlock__text-container__text">
                            Генерация доходов от <br />продажи игровых ассетов,<br /> рекламы, комиссий, а<br /> также от прожади готовых<br /> данных для трейдоров<br /> и торговли.
                        </div>
                    </div>
                </div>

                <div className="descriptionBlock">
                    <div className="descriptionBlock__logo-container">
                        <img src={CashFlow}  alt='CASH FLOW' className="descriptionBlock__logo-container-image"/>
                    </div>
                    <div className="descriptionBlock__text-container">
                        <div className="descriptionBlock__text-container__title">Доходы, обеспеченные<br /> TO THE MOON</div>
                        <div className="descriptionBlock__text-container__text">
                            Часть полученного дохода<br /> распределяется между <br />держателями MARS,<br />отправивших токен в STAKE.
                        </div>
                    </div>
                </div>

                <div className="descriptionBlock top-block cash-block-mobile">
                    <div className="descriptionBlock__logo-container">
                        <img src={MoneyFlow}  alt='Money Flow' className="descriptionBlock__logo-container-image-center"/>
                        <div>
                            Бесперебойная<br /> циркуляция денежных<br /> средств
                        </div>
                    </div>
                </div>

                <div className="descriptionBlock top-block cash-block-mobile">
                    <div className="MainInfo__button-container">
                        <a href="https://mars.tothemars.finance/auth/signup/?refId=481468777" target="_blank">Перейти на платформу</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainDescription;
