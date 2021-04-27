import { useState } from "react";
import { useHistory } from "react-router-dom";

const IPLocationForm = () => {
    const [ip, setIP] = useState('')
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/ip-location/${ip}`)
    }

    return ( 
        <div className="ip-location-form">
            <form onSubmit={handleSubmit}>
                <label>Enter an IPv4 IP Address</label>
                <input 
                    type="text"
                    minLength="7"
                    maxLength="15"
                    size="15"
                    pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$"
                    value={ip}
                    onChange={(e) => setIP(e.target.value)}
                    required
                />
                <br></br>
                <button>Submit</button>
            </form>
        </div>
    );
}
 
export default IPLocationForm;