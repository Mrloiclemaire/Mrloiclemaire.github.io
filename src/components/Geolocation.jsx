import React from "react";
import "./geolocation.css";
import logo from "../images/Locale-pointer.png";

export default function Geolocation({ setLat, setLng, setZoom }) {
  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
          setZoom(11);
        },
        () => {
          alert("Unable to retrieve your location");
        }
      );
    }
  };

  return (
    <>
      <button className="geolocationButton" onClick={() => getLocation()}>
        <img className="logoPointer" src={logo} alt="buttonGeolocate"></img>
      </button>
    </>
  );
}
