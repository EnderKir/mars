import React, { useRef } from "react";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './Home.scss';
import MainInfo from "../MainInfo/MainInfo";
import MainDescription from "../MainDescription/MainDescription";
import HowToStart from "../HowToStart/HowToStart";
import Header from "../Header/Header";
import Support from "../Support/Support";
import List from "../../assets/list.svg";

const Home = () => {
    const MainDescriptionRef = useRef(null);
    const HowToStartRef = useRef(null);
    const LinksRef = useRef(null);

    const scrollToMainDescription = () => {
        MainDescriptionRef.current.scrollIntoView({behavior: 'smooth'});
        handleMenuClose();
    };

    const scrollToHowToStart = () => {
        HowToStartRef.current.scrollIntoView({behavior: 'smooth'});
        handleMenuClose();
    };

    const scrollToLinks = () => {
        LinksRef.current.scrollIntoView({behavior: 'smooth'});
        handleMenuClose();
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="Home">
            <div className="Home__mainInfo">
                <Header scrollToMainDescription={scrollToMainDescription} scrollToHowToStart={scrollToHowToStart} scrollToLinks={scrollToLinks} />

                <div className="MobileHeader">
                    <div className="MobileHeader__list" onClick={handleMenuClick}>
                        <img src={List} alt='List' className="MobileHeader__list__icon"/>
                    </div>
                    <Menu
                        id="mobile-menu"
                        anchorEl={anchorEl}
                        anchorOrigin={{vertical: "bottom", horizontal: "center"}}
                        transformOrigin={{vertical: "top", horizontal: "center"}}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        MenuListProps={{
                            style: {
                                backgroundColor: '#9932CC',
                                color: 'white',
                            },
                        }}
                    >
                        <MenuItem onClick={scrollToMainDescription}>Бизнес TO THE MOON</MenuItem>
                        <MenuItem onClick={scrollToHowToStart}>Начало работы</MenuItem>
                        <MenuItem onClick={scrollToLinks}>Ссылки</MenuItem>
                    </Menu>
                </div>

                <MainInfo/>
            </div>

            <MainDescription refToElement={MainDescriptionRef}/>

            <HowToStart refToElement={HowToStartRef}/>

            <Support refToElement={LinksRef} />
        </div>
    );
}

export default Home;
