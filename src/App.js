
import './App.css';
import Map from './components/Map';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

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
      <Map flights={data}/>
    </div>
  );
}

export default App;
