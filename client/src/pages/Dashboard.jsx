import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Dashboard = (props) => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/"/>
            </Switch>
            <Jumbotron/>
        </Router>
    )

};

export default Dashboard;