import './Map.css'
import mapboxgl from 'mapbox-gl';
import React, { useRef, useEffect, useState } from 'react';



const Map=({flights, countryFilter,flightNumberFilter})=> {
	mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleGtlcmJsYSIsImEiOiJja3kzYWlxbmYwMDg1MnhvbjV6MHBiOHplIn0.k3LrOobdBO8e_hnBQq6Z7Q';
  const mapContainer = useRef(null);
  const map = useRef(null);
  

 

  useEffect(()=>{
    const flightCoordinate = flights.map((flight)=>(
    {longitude: flight[5] , latitude: flight[6], flightNumber: flight[1].replace(/ /g,''),departure: flight[2], rotation : flight[10], altitude: flight[13], speed : flight[9]}
  ))
  

  //  if (map.current) return; // initialize map only once/
  map.current = new mapboxgl.Map({
  container: mapContainer.current,
  style: 'mapbox://styles/mapbox/satellite-streets-v11',
  center: [-4, 48],
  zoom: 1,
  renderWorldCopies: false,
  });
  
  const el = document.createElement("div");
  

  for (let i= 0; i < flightCoordinate.length; i++) {
    if(!!countryFilter && flightCoordinate[i].departure === countryFilter ){
      el.className="marker"
      el.style.backgroundImage= `url(https://cdn-icons.flaticon.com/png/512/1365/premium/1365888.png?token=exp=1648242462~hmac=518f18198b5c55976e8e863a47565094)` ;
      el.style.width="50px";
      el.style.height="50px";
      el.style.backgroundSize = '100%';
      const marker = new mapboxgl.Marker(el)
      .setLngLat([flightCoordinate[i].longitude, flightCoordinate[i].latitude])
      .setRotation(flightCoordinate[i].rotation)
      .setPopup(new mapboxgl.Popup().setHTML(`<h3>Flight number : ${flightCoordinate[i].flightNumber}</h3><p>Current altitude : ${flightCoordinate[i].altitude} m</p><p>Speed : ${flightCoordinate[i].speed} m/s</p>`))
      .addTo(map.current);


    } else if ( !!flightNumberFilter && flightCoordinate[i].flightNumber === flightNumberFilter){
      el.className="marker"
      el.style.backgroundImage= `url(https://cdn-icons.flaticon.com/png/512/1365/premium/1365888.png?token=exp=1648242462~hmac=518f18198b5c55976e8e863a47565094)` ;
      el.style.width="50px";
      el.style.height="50px";
      el.style.backgroundSize = '100%';
      const marker = new mapboxgl.Marker(el)
    .setLngLat([flightCoordinate[i].longitude, flightCoordinate[i].latitude])
    .setRotation(flightCoordinate[i].rotation)
    .setPopup(new mapboxgl.Popup().setHTML(`<h3>Flight number : ${flightCoordinate[i].flightNumber}</h3><p>Current altitude : ${flightCoordinate[i].altitude} m</p><p>Speed : ${flightCoordinate[i].speed} m/s</p>`))
    .addTo(map.current);
    }}

  },[flights, countryFilter, flightNumberFilter])

  

  return (
    <div> 
      <div className="map">
        <div ref={mapContainer} className="map-container" />
        </div>
    </div>

  );
}

export default Map;