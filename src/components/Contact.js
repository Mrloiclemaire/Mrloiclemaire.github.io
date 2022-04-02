import ContactCard from "./ContactCard";
import Loic from "../images/loic.jpeg";
import Agathe from "../images/agathephoto.png";
import Alexandre from "../images/AKERMAREC.png";
import "./Contacts.css"

const Contact = () => {


return (
<>
<h3>That's us !</h3>
    <div className="flex">
        <ContactCard
            img={Loic}
            name="Loïc Lemaire"
            linkedinurl="https://www.linkedin.com/in/mrlo%C3%AFclemaire/"
            linkedinname="linkedin/loiclemaire"
            email="loic@gmail.com"
        />
        <ContactCard
            img={Alexandre}
            name="Alexandre Kermarec"
            linkedinurl="https://www.linkedin.com/in/mrlo%C3%AFclemaire/"
            linkedinname="linkedin/alexandrekermarec"
            email="alexkermarec@hotmail.fr"
        />
        <ContactCard
            img={Agathe}
            name="Agathe Geniteau"
            linkedinurl="https://www.linkedin.com/in/mrlo%C3%AFclemaire/"
            linkedinname="linkedin/agathegeniteau"
            email="agathe@gmail.com"
        />
    </div>
</>
)

    }

    export default Contact;