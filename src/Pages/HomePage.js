import Map from "../components/Map";
import CountryFilter from "../components/CountryFilter"


const HomePage = ({flights, setCountryFilter, countryFilter, setFlightNumberFilter,flightNumberFilter}) => {


    return(
    <>
        <CountryFilter flights={flights} setCountryFilter={setCountryFilter} setFlightNumberFilter={setFlightNumberFilter}/>
        <Map flights={flights} countryFilter={countryFilter} flightNumberFilter={flightNumberFilter} />
    </>

    )
}


export default HomePage;