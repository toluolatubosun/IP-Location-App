const IPLocationList = ({ data }) => {
    return ( 
        <div className="ip-location-list">
            <img alt={data.country_name} src={ data.country_flag }/>

            <h4>IP Address:</h4>
            <h2>{ data.ip }</h2>

            <h4>Location:</h4>
            <h2>{ data.state_prov } / { data.country_name }</h2>
            
            <h4>Longitude - Latitude:</h4>
            <h2>{ data.longitude } - { data.latitude }</h2>

            <h4>Timezone:</h4>
            <h2>{ data.time_zone.name }</h2>
        </div>

    );
}
 
export default IPLocationList;