import './App.css';
import { useState, useEffect } from "react";
import Header from './Pages/Header';
import HomePage from './Pages/HomePage';
import axios from "axios";
import Contact from "./components/Contact";
import Footer from"./components/Footer";
import { Route, Routes } from "react-router-dom";



const App=()=> {
  const [countryFilter, setCountryFilter] = useState("")
  const [flightNumberFilter,setFlightNumberFilter] = useState("")


  const getData= async (e) => {
    const url = "https://opensky-network.org/api/states/all";

    const {data} = await axios(url);
    
    setData(data.states);
  }

  const [data, setData] = useState([]);

  useEffect(()=>{

    
    getData();

    const interval = setInterval(getData,10000)
    
  },[])


    // GEOLOCATION FUNCTION
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [zoom, setZoom] = useState(1)
    

    // COUNT FUNCTION
    
    const [count,setCount] = useState(null)

  return (
    <div className="App">
      <Header/>
      <Routes>
            <Route path="/" element={<HomePage flights={data} setCountryFilter={setCountryFilter} countryFilter={countryFilter} setFlightNumberFilter={setFlightNumberFilter} flightNumberFilter={flightNumberFilter} setLat={setLat} setLng={setLng} lat={lat} lng={lng} zoom={zoom} setZoom={setZoom} count={count} setCount={setCount} />} />
            <Route path="/contact" element={<Contact/>}/>
      </Routes>  
      <Footer/>
    </div>
  );
}

export default App;

