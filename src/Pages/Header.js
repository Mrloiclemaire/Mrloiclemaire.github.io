import "./Header.css"
import React, {useState } from 'react';
import Plane from "../images/airbus.png";
import Burger from "../images/burger1.png";
import Cross from "../images/crossmenu.png";
import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';

const Header = () => {

    const [menuStatus,setMenuStatus] = useState("menu--burger closed")
    const [burgerType,setBurger] = useState("cta--burger burger")


    const toggleMenu = ()=> {
        menuStatus === "menu--burger closed" ? setMenuStatus("menu--burger opened") : setMenuStatus("menu--burger closed")
        burgerType === "cta--burger burger" ? setBurger("cta--burger cross") : setBurger("cta--burger burger")
        
    }

    const closeMenu = () => {
        setMenuStatus("menu--burger closed")
        setBurger("cta--burger burger")
    }

    return(

    <header>
        <img className="plane"src={Plane} alt="plane-logo"/>
        <h1 className="title">Wild Flight Finder</h1>

        <img className={burgerType} src={burgerType==="cta--burger burger" ? Burger : Cross} alt="burger-menu" onClick={toggleMenu}/>

        <div className={menuStatus}>
            <ul>
                <Link to="/" style={{ textDecoration: 'none' }} onClick={closeMenu}><li>Home</li></Link>
                <Link to="/contact" style={{ textDecoration: 'none' }} onClick={closeMenu}><li>Contact</li></Link>
            </ul>
        </div>
    </header>
    )
}


export default Header;