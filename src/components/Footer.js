import React from "react"
import "../Footer.css"
import Logowcs from"../images/logowcs.png"

export default function Footer(){
return (
    <div className="content">
    <div className="list">
    <p>Home</p>
    <p>Contact</p>
    </div>
    <div className="wcs">
    <p>Site réalisé par les élèves de la </p>
    <img className="logo" src={Logowcs} alt="WildCodeSchool"/>
    </div>
    </div>
)
}