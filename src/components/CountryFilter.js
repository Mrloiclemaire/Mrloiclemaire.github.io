import React from 'react'

export default function Filter({flights, setCountryFilter, setFlightNumberFilter}) {

    const countries = 
    flights.map((flight)=>(flight[2]))
    const uniqueCountries=([...new Set(countries)]).sort()

return (
    <div>
        <form>
        <select  name="countries" onChange={(e)=>{setCountryFilter(e.target.value); setFlightNumberFilter(null)}}>
        {uniqueCountries.map((country, key)=>(<option key={key}>{country}</option>))}
        </select>
        </form>
    </div>
)
}
