import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import IPLocation from './IPLocation'
import NotFound from './NotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />

                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>

                        <Route exact path="/ip-location/:ip?">
                            <IPLocation />
                        </Route>

                        <Route exact path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </div>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
