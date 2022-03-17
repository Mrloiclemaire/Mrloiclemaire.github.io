//https://opensky-network.org/api/states/all
import './Map.css'
import mapboxgl from 'mapbox-gl';
import React, { useRef, useEffect, useState } from 'react';



const Map=({flights})=> {
 
	mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleGtlcmJsYSIsImEiOiJja3kzYWlxbmYwMDg1MnhvbjV6MHBiOHplIn0.k3LrOobdBO8e_hnBQq6Z7Q';
  const mapContainer = useRef(null);
  const map = useRef(null);
  console.log(map);
  const [lng, setLng] = useState(-4,921);
  const [lat, setLat] = useState(48,9186);
  const [zoom, setZoom] = useState(4);
  

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [lng, lat],
    zoom: zoom
    });

    for (let index = 0; index < 5; index++) {
      const index = new mapboxgl.Marker()
    .setLngLat([-4, 48])
    .addTo(map.current);
    // console.log(index);
    
      
    }
    //   const marker = new mapboxgl.Marker()
    // .setLngLat([5, 48])
    // .addTo(map.current);
    // console.log(flights[1]);
    
    },[]);

    
    

  return (
    <div> 
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