import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>IP-Locator</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/ip-location">IP-Location</Link>
            </div>
        </div>
    );
}
 
export default Navbar;