import React from "react"
import Contacts from "../Contacts.css"
import Linkedin from"../images/logo-linkedin.png"
import Email from "../images/emailpicto.png"

export default function Contact(props){
return (
    <div className="contact-card">
        <img className="contact-card__photo"src={props.img} alt="Loïc Photo" height="200" />
        <h2 className="contact-card__name">{props.name}</h2>
    <div className="contact-card__linkedin">
        <img className="contact-card__linkedin--logo" src={Linkedin}/>
        <p><a className="contact-card__linkedin--mail" href={props.linkedinurl}> {props.linkedinname}</a></p>
    </div>
    <div className="contact-card__email">
        <img className="contact-card__email--picto" src={Email}/>
        <p className="contact-card__email--text">{props.email}</p>
    </div>
    </div>
)
}