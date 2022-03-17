
import './App.css';
import { useState } from "react";
import { useEffect } from "react";
import Header from './Pages/Header';
import HomePage from './Pages/HomePage';
import axios from "axios";
import Contact from "./components/Contact"
import Loic from "./images/loic.jpeg";
import { Route, Routes } from "react-router-dom";


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

  data.forEach(element => {
    console.log(data[0][2]);
  });

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

      <Header/>
      <Routes>
            <Route path="/" element={<HomePage flights={data}/>} />
      </Routes>   
      

    </div>
  );
}

export default App;
