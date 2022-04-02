import React from 'react'

export default function Filter({flights, setCountryFilter, setFlightNumberFilter, countryFilter}) {

    const countries = 
    flights.map((flight)=>(flight[2]))
    const uniqueCountries=([...new Set(countries)]).sort()

return (
    <div>
        <form>
        <select  name="countries" value={countryFilter} onChange={(e)=>{setCountryFilter(e.target.value); setFlightNumberFilter("")}}>
        {uniqueCountries.map((country, key)=>(<option key={key}>{country}</option>))}
        </select>
        </form>
    </div>
)
}
