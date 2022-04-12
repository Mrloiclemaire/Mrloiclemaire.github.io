import Map from "../components/Map";
import CountryFilter from "../components/CountryFilter"
import FlightNumberSearchBar from '../components/FlightNumberSearchBar';



const HomePage = ({flights, setCountryFilter, countryFilter, setFlightNumberFilter,flightNumberFilter,setLat, setLng, lat, lng ,zoom, setZoom}) => {


    return(
    <>
        <FlightNumberSearchBar setFlightNumberFilter={setFlightNumberFilter} setCountryFilter={setCountryFilter} flightNumberFilter={flightNumberFilter} setZoom={setZoom} />
        <CountryFilter flights={flights} setCountryFilter={setCountryFilter} setFlightNumberFilter={setFlightNumberFilter} countryFilter={countryFilter} setZoom={setZoom}/>
        <Map flights={flights} countryFilter={countryFilter} flightNumberFilter={flightNumberFilter} setLat={setLat} setLng={setLng} lat={lat} lng={lng} zoom={zoom} setZoom={setZoom}/>
    </>
    )
}


export default HomePage;