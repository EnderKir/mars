import React from "react";
import './HowToStart.scss';
import Fox from "../../assets/fox.svg";
import WareHouse from "../../assets/warehouse.svg";
import Follower from "../../assets/follower.svg";
import Wallet from "../../assets/wallet.svg";
import Checked from "../../assets/checked.svg";


const HowToStart = ({refToElement}) => {
    return (
        <div className="HowToStart" ref={refToElement}>
            <div className="HowToStart__title">Начало работы</div>

            <div className="HowToStart__wrapper">

            <div className="HowToStart__block">
                <div className="HowToStart__block__text">
                    1. После перехода на новую платформу необходимо зарегистрировать кошелек <b>MetaMask</b> и
                    подключить к
                    нему сеть Binance Smart Chain. Ссылка на инструкцию по регистрации <b>MetaMask</b><br/>
                    <a href="https://medium.com/@sn_69588/установка-и-подключение-metamask-к-сети-binance-smart-chain-и-ручное-добавление-токенов-12f37e393e77
" target="_blank" className="HowToStart__block__link">Инструкция</a>
                </div>
                <div className="HowToStart__block__imageContainer">
                    <img src={Fox} alt='MARS COIN' className="HowToStart__block__imageContainer__image"/>
                </div>
            </div>


            <div className="HowToStart__block">
                <div className="HowToStart__block__text">
                    2. Далее важно разобраться,как пополнять кошелек <b>MetaMask</b> с биржи <b>Binance</b>.
                    Это необходимо для покупки средств для комиссий,которые еще называют «газом». Ссылка на инструкцию<br/>
                    <a href="https://sn-69588.medium.com/покупка-криптовалюты-bnb-для-оплаты-газа-в-кошельке-metamask-при-использовании-сети-binance-smart-99d97507e16d
" target="_blank" className="HowToStart__block__link">Инструкция</a>
                </div>
                <div className="HowToStart__block__imageContainer">
                    <img src={WareHouse} alt='MARS COIN' className="HowToStart__block__imageContainer__image"/>
                </div>
            </div>

            <div className="HowToStart__block">
                <div className="HowToStart__block__text">
                    3. Вам также будет необходимо подключить <b>MetaMask</b>🦊 к личному кабинету <b>MARS</b>
                </div>
                <div className="HowToStart__block__imageContainer">
                    <img src={Follower} alt='MARS COIN' className="HowToStart__block__imageContainer__image"/>
                </div>
            </div>

            <div className="HowToStart__block">
                <div className="HowToStart__block__text">
                    4. Далее необходимо подключить кошелек <b>MetaMask</b> к бирже <b>DODO</b>. Как это сделать описали в инструкции <br />
                    <a href="https://medium.com/@sn_69588/инструкция-по-использованию-протокола-обмена-dodo-2df39dfe4d1b
" target="_blank" className="HowToStart__block__link">Инструкция</a>
                </div>
                <div className="HowToStart__block__imageContainer">
                    <img src={Wallet} alt='MARS COIN' className="HowToStart__block__imageContainer__image"/>
                </div>
            </div>

            <div className="HowToStart__block">
                <div className="HowToStart__block__text">
                    5. Все! Теперь вы можете выбрать дальнейшие действия, а именно <br />
                    <b>Купить</b> токены MARS на бирже (по желанию)<br />
                    <b>Поставить</b> токены MARS на вывод (по желанию). Срок вывода MARS с платформы составляет 72 часа<br />
                    Ничего не делать – оставить свои MARS в стейке и <b>получать пассивный доход</b><br />
                </div>
                <div className="HowToStart__block__imageContainer">
                    <img src={Checked} alt='MARS COIN' className="HowToStart__block__imageContainer__image"/>
                </div>
            </div>

            </div>
        </div>
    );
}

export default HowToStart;
