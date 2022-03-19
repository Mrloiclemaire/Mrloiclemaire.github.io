import Map from "../components/Map";
import Filter from "../components/Filter"


const HomePage = ({flights, setFilter, filter}) => {


    return(
    <>
        <Filter flights={flights} setFilter={setFilter}/>
        <Map flights={flights} filter={filter}/>
    </>

    )
}


export default HomePage;