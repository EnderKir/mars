import React from "react";
import './Support.scss';
import MainIcon from "../../assets/mail.svg";
import Instagram from "../../assets/instagram.svg";
import Youtube from "../../assets/youtube.svg";
import Telegram from "../../assets/telegram.svg";


const Support = ({refToElement}) => {
    return (
        <div className="Support" ref={refToElement}>
            <div className="Support__title">Нужна помощь?</div>
            <div className="Support__email-title">Свяжитесь с нами по указанному адресу и мы ответим на все интересующие
                вас вопросы!
            </div>
            <div className="Support__email-container">
                <img src={MainIcon} alt='MAIL ICON' className="Support__email-container__image"/>
                <div className="Support__email-container__text">tothemarsinfo@gmail.com</div>
            </div>

            <div className="Support__watchUs">Следите за нами в социальных сетях</div>

            <div className="Support__links-container">
                <a target="_blank" href="https://www.instagram.com/tothemars.finance/">
                    <img src={Instagram} alt="Instagram" className="Support__links-container__image"/>
                </a>
                <a target="_blank" href="https://youtube.com/c/TOTHEMARS">
                    <img src={Youtube} alt="Instagram" className="Support__links-container__image"/>
                </a>
                <a target="_blank" href="https://t.me/tothemars_news">
                    <img src={Telegram} alt="Instagram" className="Support__links-container__image"/>
                </a>
            </div>
        </div>
    );
}

export default Support;
