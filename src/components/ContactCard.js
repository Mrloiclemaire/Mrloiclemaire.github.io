import React from "react"
import "./Contacts.css"
import Linkedin from"../images/logo-linkedin.png"
import Email from "../images/emailpicto.png"
import Github from "../images/gitlogo.svg"

export default function ContactCard(props){
return (
    
    <div className="contact-card">
        
        <img className="contact-card__photo"src={props.img} alt="Loïc" height="200" />
        <h2 className="contact-card__name">{props.name}</h2>
        <div className="contact-card__email">
            <img className="contact-card__email--picto" alt="email" src={Email}/>
            <p className="contact-card__email--text">{props.email}</p>
        </div>
        <div className="logo">
        <div className="contact-card__linkedin">
            <a href={props.linkedinurl}><img className="contact-card__linkedin--logo"  alt="linkedin" src={Linkedin}/></a>
            {/* <p><a className="contact-card__linkedin--mail" href={props.linkedinurl}> {props.linkedinname}</a></p> */}
        </div>
        <div className="contact-card__github">
            <a href={props.github}> <img className="contact-card__github--logo" alt="github" src={Github}/></a>
            {/* <p><a className="contact-card__linkedin--mail" href={props.github}> {props.github}</a></p> */}
        </div>
        </div>
        
    </div>
)
}

