import React from 'react'
import "./Filters.css"

export default function Filter({flights, setCountryFilter, setFlightNumberFilter}) {

    const countries = 
    flights.map((flight)=>(flight[2]))
    const uniqueCountries=([...new Set(countries)]).sort()

return (
    <div>
        <form className='flex-filter filter-country' >
            <ul>Country of origin :</ul>
        <select  name="countries" className='filter' onChange={(e)=>{setCountryFilter(e.target.value); setFlightNumberFilter(null)}}>
        {uniqueCountries.map((country, key)=>(<option key={key}>{country}</option>))}
        </select>
        </form>
    </div>
)
}
