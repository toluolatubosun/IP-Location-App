import { Link } from 'react-router-dom'

const Home = () => {
    return ( 
        <div className="home">
            <div className="center">
                <h1>Welcome to IP-Locator...</h1>
                <Link to="/ip-location">
                    <button>Click Me 😉</button>
                </Link>
            </div>
        </div>
    );
}
 
export default Home;