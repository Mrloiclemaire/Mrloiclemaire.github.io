import React, { useEffect , useState} from 'react'
import "./geolocation.css"


export default function Geolocation({setLat,setLng,setZoom}) {
    
    const getLocation = () => {
        
        if (!navigator.geolocation) {
        alert('Geolocation is not supported by your browser');
        } else {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
            setZoom(13)
        }, () => {
            alert('Unable to retrieve your location');
        });
        }
    }

return (
    <>
    <button className='geolocationButton' onClick={()=>getLocation()}>Get Location</button>
    </>
)
}
