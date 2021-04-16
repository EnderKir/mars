import React from "react";
import './Header.scss';

const Header = ({scrollToMainDescription, scrollToHowToStart}) => {
    return (
        <div className="Header">
            <div className="Header__link" onClick={scrollToMainDescription}>Бизнес TO THE MOON</div>
            <div className="Header__link" onClick={scrollToHowToStart}>Начало работы</div>
            {/*<div className="Header__link">Ссылки</div>*/}
        </div>
    );
}

export default Header;
