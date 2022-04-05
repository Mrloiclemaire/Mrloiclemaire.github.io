import React from 'react'
import "./Filters.css"

export default function Filter({flights, setCountryFilter, setFlightNumberFilter, countryFilter}) {

    const countries = 
    flights.map((flight)=>(flight[2]))
    const uniqueCountries=([...new Set(countries)]).sort()

return (
    <div>

        <form className='flex-filter filter-country' >
            <ul>Select country of departure:</ul>
        <select  name="countries" className='filter' value={countryFilter} onChange={(e)=>{setCountryFilter(e.target.value); setFlightNumberFilter("")}}>
        {uniqueCountries.map((country, key)=>(<option key={key}>{country}</option>))}
        </select>
        </form>
    </div>
)
}
