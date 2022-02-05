//https://opensky-network.org/api/states/all




const Map=({flights})=> {
 
  return (
    <div>
        {
          flights.map((flight)=>(
            <p>Flight {flight[1]} destination : {flight[2]}</p>
          )
          )
        }
    </div>
  );
}

export default Map;