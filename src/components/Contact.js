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
            linkedinname="linkedin/mrloiclemaire"
            email="mrloiclemaire@gmail.com"
            github="https://github.com/Mrloiclemaire"
        />
        <ContactCard
            img={Alexandre}
            name="Alexandre Kermarec"
            linkedinurl="https://fr.linkedin.com/in/alexandre-kermarec-22b3a731"
            linkedinname="linkedin/alexandre-kermarec"
            email="alexkermarec@hotmail.fr"
            github="https://github.com/alexandrekermarec"
        />
        <ContactCard
            img={Agathe}
            name="Agathe Geniteau"
            linkedinurl="https://www.linkedin.com/in/agathe-geniteau-1a4a6281/"
            linkedinname="linkedin/agathegeniteau"
            email="agathe@gmail.com"
            github="https://github.com/AgatheBo"
        />
    </div>
</>
)

    }

    export default Contact;