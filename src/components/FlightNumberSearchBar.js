import React from 'react'

export default function FlightNumberSearchBar({flightNumberFilter,setFlightNumberFilter,setCountryFilter}) {


  return (

    <div>
        <input name="flightNumber"  onChange={(e)=>{setCountryFilter(null);setFlightNumberFilter(e.target.value)}} 
        type="text" placeholder="Enter your flight number"></input>
        
    </div>
  )
}
