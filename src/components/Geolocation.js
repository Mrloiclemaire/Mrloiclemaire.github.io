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
            setZoom(11)
        }, () => {
            alert('Unable to retrieve your location');
        });
        }
    }

return (
    <>
    <button className='geolocationButton' onClick={()=>getLocation()}><img src="https://cdn-icons.flaticon.com/png/512/4284/premium/4284108.png?token=exp=1649787464~hmac=c03952ea7ecdd2cb33bc8e769fb3d64f" alt="buttonGeolocate"></img></button>
    </>
)
}
