import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Stocks from '../pages/Stocks';
import Logout from '../components/Logout/Logout'

const Dashboard = (props) => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/stocks" component={Stocks}/>
                <Route path="/logout" component={Logout}/>
            </Switch>
            <Jumbotron/>
        </Router>
    )

};

export default Dashboard;