import React from 'react'
import "./Filters.css"

export default function FlightNumberSearchBar({flightNumberFilter,setFlightNumberFilter,setCountryFilter,setZoom}) {


  return (


    <div className='flex-filter'>
      <ul>Enter flight number :</ul>
        <input name="flightNumber" value={flightNumberFilter} className='filter filter-number'  onChange={(e)=>{setZoom(2);setCountryFilter("");setFlightNumberFilter(e.target.value)}} 
        type="text" placeholder="Enter your flight number"></input>
        
    </div>
  )
}
