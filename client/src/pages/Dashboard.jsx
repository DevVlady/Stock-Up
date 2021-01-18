import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Dashboard = (props) => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/"/>
            </Switch>
            <Jumbotron/>
            <Footer/>
        </Router>
    )

};

export default Dashboard;