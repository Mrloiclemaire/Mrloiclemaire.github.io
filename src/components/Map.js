import './Map.css'
import mapboxgl from 'mapbox-gl';
import React, { useRef, useEffect, useState } from 'react';



const Map=({flights, filter})=> {
	mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleGtlcmJsYSIsImEiOiJja3kzYWlxbmYwMDg1MnhvbjV6MHBiOHplIn0.k3LrOobdBO8e_hnBQq6Z7Q';
  const mapContainer = useRef(null);
  const map = useRef(null);
  

  useEffect(()=>{

    const flightCoordinate = flights.map((flight)=>(
    {longitude: flight[5] , latitude: flight[6], flightNumber: flight[1],departure: flight[2]}
  ))
  

  //  if (map.current) return; // initialize map only once/
  map.current = new mapboxgl.Map({
  container: mapContainer.current,
  style: 'mapbox://styles/mapbox/satellite-streets-v11',
  center: [-4, 48],
  zoom: 1,
  renderWorldCopies: false,
  });
  
  
  for (let i= 0; i < flightCoordinate.length; i++) {
    if (flightCoordinate[i].departure === filter){
    const marker = new mapboxgl.Marker()
    .setLngLat([flightCoordinate[i].longitude, flightCoordinate[i].latitude])
    .addTo(map.current);
    
    }}
  
  },[flights, filter])

  

  return (
    <div> 
      <div className="map">
        <div ref={mapContainer} className="map-container" />
        </div>
    </div>
    
  );
}

export default Map;