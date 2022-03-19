import React from 'react'

export default function Filter({flights, setFilter}) {

    const countries = 
    flights.map((flight)=>(flight[2]))

    const uniqueCountries=([...new Set(countries)]).sort()
    

    

return (
    <div>
        <form>
        <select  name="countries" onChange={(e)=>setFilter(e.target.value)}>
        {uniqueCountries.map((country, key)=>(<option key={key}>{country}</option>))}
        </select>
        </form>
    </div>
)
}
