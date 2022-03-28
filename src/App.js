import './App.css';
import { useState, useEffect } from "react";
import Header from './Pages/Header';
import HomePage from './Pages/HomePage';
import axios from "axios";
import Contact from "./components/Contact"
import Loic from "./images/loic.jpeg";
import { Route, Routes } from "react-router-dom";
import Map from "./components/Map.js"
import FlightNumberSearchBar from './components/FlightNumberSearchBar';

const App=()=> {

  const [countryFilter, setCountryFilter] = useState([])
  const [flightNumberFilter,setFlightNumberFilter] = useState("")


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
      <Header/>
      <FlightNumberSearchBar setFlightNumberFilter={setFlightNumberFilter} setCountryFilter={setCountryFilter} flightNumberFilter={flightNumberFilter} />
      <Routes>
            <Route path="/" element={<HomePage flights={data} setCountryFilter={setCountryFilter} countryFilter={countryFilter} setFlightNumberFilter={setFlightNumberFilter} flightNumberFilter={flightNumberFilter} />} />
      </Routes>  
{/* 
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
      />  */}
      

    </div>
  );
}

export default App;
