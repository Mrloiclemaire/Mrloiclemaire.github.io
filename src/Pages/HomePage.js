import Map from "../components/Map";
import CountryFilter from "../components/CountryFilter"
import FlightNumberSearchBar from '../components/FlightNumberSearchBar';



const HomePage = ({flights, setCountryFilter, countryFilter, setFlightNumberFilter,flightNumberFilter}) => {


    return(
    <>
        <FlightNumberSearchBar setFlightNumberFilter={setFlightNumberFilter} setCountryFilter={setCountryFilter} flightNumberFilter={flightNumberFilter} />
        <CountryFilter flights={flights} setCountryFilter={setCountryFilter} setFlightNumberFilter={setFlightNumberFilter} countryFilter={countryFilter}/>
        <Map flights={flights} countryFilter={countryFilter} flightNumberFilter={flightNumberFilter} />
    </>

    )
}


export default HomePage;