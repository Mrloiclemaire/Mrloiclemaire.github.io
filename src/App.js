
import './App.css';
import { useState } from "react";
import { useEffect } from "react";
import Header from './Pages/Header';
import HomePage from './Pages/HomePage';
import axios from "axios";
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
      <Header/>
      <Routes>
            <Route path="/" element={<HomePage flights={data}/>} />
      </Routes>   
      
    </div>
  );
}

export default App;
