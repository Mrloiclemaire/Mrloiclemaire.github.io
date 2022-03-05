
import './App.css';
import Map from './components/Map';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Contact from "./components/Contact"
import Loic from "./images/loic.jpeg";


const App=()=> {

  const [data, setData] = useState([]);

  useEffect(()=>{


    const getData= async (e) => {
      const url = "https://opensky-network.org/api/states/all";
  
      const {data} = await axios(url);
      
      setData(data.states);
    };


    
    getData();
    
  },[])

  return (
    <div className="App">
      <Contact
        img={Loic}
        name="Loïc Lemaire"
        linkedinurl="https://www.linkedin.com/in/mrlo%C3%AFclemaire/"
        linkedinname="linkedin/loiclemaire"
        email="loic@gmail.com"
      />
      <Contact
        img={Loic}
        name="Alexandre Kermarec"
        linkedinurl="https://www.linkedin.com/in/mrlo%C3%AFclemaire/"
        linkedinname="linkedin/alexandrekermarec"
        email="alexandre@gmail.com"
      />
       <Contact
        img={Loic}
        name="Agathe Geniteau"
        linkedinurl="https://www.linkedin.com/in/mrlo%C3%AFclemaire/"
        linkedinname="linkedin/agathegeniteau"
        email="agathe@gmail.com"
      />
      <Map flights={data}/>
    </div>
  );
}

export default App;
