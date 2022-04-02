import "./Header.css"
import React, {useState } from 'react';
import Plane from "../images/plane.png";
import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';

const Header = () => {

    const [menuStatus,setMenuStatus] = useState("menu--burger closed")


    const toggleMenu = ()=> {
        menuStatus == "menu--burger closed" ? setMenuStatus("menu--burger opened") : setMenuStatus("menu--burger closed")
        console.log(menuStatus);
    }

    const closeMenu = () => {
        setMenuStatus("menu--burger closed")
    }

    return(

    <header>
        <img className="plane"src={Plane} alt="plane-logo"/>
        <h1>THE Wild Flight Finder</h1>
        <div class="cta--burger" onClick={toggleMenu}>
            <div class="trait"></div>
            <div class="trait-small"></div>
            <div class="trait"></div>
        </div>
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