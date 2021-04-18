import React from "react";
import './Header.scss';

const Header = ({scrollToMainDescription, scrollToHowToStart, scrollToLinks}) => {
    return (
        <div className="Header">
            <div className="Header__link" onClick={scrollToMainDescription}>Бизнес TO THE MOON</div>
            <div className="Header__link" onClick={scrollToHowToStart}>Начало работы</div>
            <div className="Header__link" onClick={scrollToLinks}>Ссылки</div>
        </div>
    );
}

export default Header;
