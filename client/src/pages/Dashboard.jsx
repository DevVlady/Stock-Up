import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Footer from '../components/Footer/Footer';
import Stocks from '../pages/Stocks';
import Logout from '../components/Logout/Logout'
// import {FooterContainer} from '../containers/Footer'

const Dashboard = (props) => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/stocks" component={Stocks}/>
                <Route exact path="/logout" component={Logout}/>
            </Switch>
            <Jumbotron/>
            {/* <FooterContainer/> */}
        </Router>
    )

};

export default Dashboard;