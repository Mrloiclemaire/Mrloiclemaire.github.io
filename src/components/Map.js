import './Map.css'
import mapboxgl from 'mapbox-gl';
import React, { useRef, useEffect, useState } from 'react';
import $ from 'jquery';




const Map=({flights, countryFilter,flightNumberFilter})=> {
	mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleGtlcmJsYSIsImEiOiJja3kzYWlxbmYwMDg1MnhvbjV6MHBiOHplIn0.k3LrOobdBO8e_hnBQq6Z7Q';
  const mapContainer = useRef(null);
  const map = useRef(null);

  

  const [mapStyle , setMapStyle] = useState("satellite-streets-v11")
  
  useEffect(()=>{ map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: `mapbox://styles/mapbox/${mapStyle}`,
    center: [-4, 48],
    zoom: 1,
    renderWorldCopies: false,
    })},[mapStyle])
  
  useEffect(()=>{
    
  const el = document.createElement("div");
  const flightCoordinate = flights.map((flight)=>(
    {longitude: flight[5] , latitude: flight[6], flightNumber: flight[1].replace(/ /g,''),departure: flight[2], rotation : flight[10], altitude: flight[13], speed : flight[9]}
  ))


  for (let i= 0; i < flightCoordinate.length; i++) {
    if(!!countryFilter && flightCoordinate[i].departure === countryFilter ){
      const el = document.createElement("div");
      el.className="marker"
      el.style.backgroundImage= `url(https://d29fhpw069ctt2.cloudfront.net/icon/image/49621/preview.svg)` ;
      el.style.width="30px";
      el.style.height="30px";
      el.style.backgroundSize = '100%';
      const marker = new mapboxgl.Marker(el)
      .setLngLat([flightCoordinate[i].longitude, flightCoordinate[i].latitude])
      .setRotation(flightCoordinate[i].rotation -45)
      .setRotationAlignment("viewport")
      .setPopup(new mapboxgl.Popup().setHTML(`<h4>Flight number : ${flightCoordinate[i].flightNumber ? flightCoordinate[i].flightNumber : "Unknown" }</h4><h4>Current altitude : ${flightCoordinate[i].altitude ? flightCoordinate[i].altitude +" m": "Unknown"} </h4><h4>Speed : ${Math.floor(flightCoordinate[i].speed*3.6) ? Math.floor(flightCoordinate[i].speed*3.6 )+" Km/h" : "Unknown"}</h4>`))
      .addTo(map.current)



    } else if ( !!flightNumberFilter && flightCoordinate[i].flightNumber === flightNumberFilter){
      const el = document.createElement("div");
      el.className="marker"

      el.style.backgroundImage= `url(https://d29fhpw069ctt2.cloudfront.net/icon/image/49621/preview.svg)` ;
      el.style.width="30px";
      el.style.height="30px";

      el.style.backgroundSize = '100%';
      const marker = new mapboxgl.Marker(el)
    .setLngLat([flightCoordinate[i].longitude, flightCoordinate[i].latitude])
    .setRotation(flightCoordinate[i].rotation - 45)
    .setPopup(new mapboxgl.Popup().setHTML(`<h4>Flight number : ${flightCoordinate[i].flightNumber ? flightCoordinate[i].flightNumber : "Unknown" }</h4><h4>Current altitude : ${flightCoordinate[i].altitude ? flightCoordinate[i].altitude +" m": "Unknown"} </h4><h4>Speed : ${Math.floor(flightCoordinate[i].speed*3.6) ? Math.floor(flightCoordinate[i].speed*3.6 )+" Km/h" : "Unknown"}</h4>`))
    .addTo(map.current);

    
    }}

    return function cleanup(){
      $( ".marker" ).remove();
    }
    
  

},[flights, countryFilter, flightNumberFilter,mapStyle])

  

  return (
    <div> 
      <div className="map">
      <div ref={mapContainer} className="map-container" />
      <form className='formRadio'>
        <input type="radio" id="Satellite" name="fav_language" value="satellite-streets-v11" onChange={(e)=>setMapStyle(e.target.value)}></input>
        <label for="Satellite">Satellite map</label>
        
        <input type="radio" id="Traffic" name="fav_language" value="navigation-day-v1" onChange={(e)=>setMapStyle(e.target.value)}></input>
        <label for="Traffic">Traffic map</label>

        <input type="radio" id="Light" name="fav_language" value="light-v10" onChange={(e)=>setMapStyle(e.target.value)} ></input>
        <label for="Light">Light mod map</label>

        <input type="radio" id="Dark" name="fav_language" value="dark-v10" onChange={(e)=>setMapStyle(e.target.value)}></input>
        <label for="Dark">Dark mod map</label>
        
      </form>

        
        
        </div>
    </div>

  );
}

export default Map;