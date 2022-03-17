//https://opensky-network.org/api/states/all
import './Map.css'
import mapboxgl from 'mapbox-gl';
import React, { useRef, useEffect, useState } from 'react';



const Map=({flights})=> {
	mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleGtlcmJsYSIsImEiOiJja3kzYWlxbmYwMDg1MnhvbjV6MHBiOHplIn0.k3LrOobdBO8e_hnBQq6Z7Q';
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [coordinates,setCoordinates] = useState([])


  useEffect(()=>{
  const flightCoordinate = []

  flights.map((flight)=>(
    flightCoordinate.push({longitude: flight[5] , latitude: flight[6], flightNumber: flight[1]})
  ))

  setCoordinates(flightCoordinate)

  },[flights])


  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [-4, 48],
    zoom: 4
    });

    for (let i= 0; i < coordinates.length; i++) {
      const index = new mapboxgl.Marker()
    .setLngLat([coordinates[i].longitude, coordinates[i].latitude])
    .addTo(map.current);
    }
    
    
    // const index = new mapboxgl.Marker()
    // .setLngLat([coordinates[1].longitude, coordinates[1].latitude])
    // .addTo(map.current)
      
    const index2 = new mapboxgl.Marker()
    .setLngLat([2,4])
    .addTo(map.current)
    
      const marker = new mapboxgl.Marker()
    .setLngLat([5, 48])
    .addTo(map.current);
    console.log(flights[1]);
    
    },[coordinates]);

  return (
    <div> 
      <div id="map"></div>
      <div>
      
        <div ref={mapContainer} className="map-container" />
        </div>
        {
          flights.map((flight,index)=>(
            <p key={index}>Flight {flight[1]} destination : {flight[2]}</p>
          )
          )
        }
        
    </div>
    
  );
}

export default Map;