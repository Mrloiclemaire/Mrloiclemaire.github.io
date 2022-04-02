import React from "react"
import "../Footer.css"
import Logowcs from"../images/logowcs.png"

export default function Footer(){
return (
    <div className="content">
    <div className="list">
    </div>
    <div className="wcs">
    <p>Website by the students from </p>
    <img className="logo" src={Logowcs} alt="WildCodeSchool"/>
    </div>
    </div>
)
}