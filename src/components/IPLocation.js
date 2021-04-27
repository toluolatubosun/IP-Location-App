import useFetch from "../hooks/useFetch"
import { useParams } from "react-router-dom"
import loadingImage from "../resources/loading.svg"
import IPLocationList from './temp/IPLocationList'
import IPLocationForm from './temp/IPLocationForm'

const {REACT_APP_IP_LOCATION_API_TOKEN} = process.env

const IPLocation = () => {
    const { ip } = useParams();
    
    var url = ''

    if( ip ){
        url = `https://api.ipgeolocation.io/ipgeo?apiKey=${REACT_APP_IP_LOCATION_API_TOKEN}&ip=${ip}`
    }else{
        url = `https://api.ipgeolocation.io/ipgeo?apiKey=${REACT_APP_IP_LOCATION_API_TOKEN}`
    }

    const { data, loading, error} = useFetch(url)

    return (
        <div className="ip-location">
            <div className="center">
                { loading && <img alt="loading" src={loadingImage}/> } 
                { error && <h1 style={{color:"red"}}>{ error }</h1> } 
                { data && <IPLocationList data={data} /> }
                { data && <IPLocationForm /> }
            </div>
        </div>
    );
}
 
export default IPLocation;