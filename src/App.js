import './App.css';
import { useState, useEffect } from "react";
import Header from './Pages/Header';
import HomePage from './Pages/HomePage';
import axios from "axios";
import Contact from "./components/Contact"

import { Route, Routes } from "react-router-dom";
import Map from "./components/Map.js"


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
      
      <Routes>
            <Route path="/" element={<HomePage flights={data} setCountryFilter={setCountryFilter} countryFilter={countryFilter} setFlightNumberFilter={setFlightNumberFilter} flightNumberFilter={flightNumberFilter} />} />
            <Route path="/contact" element={<Contact/>}/>
      </Routes>  

    </div>
  );
}

export default App;
