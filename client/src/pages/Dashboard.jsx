import React from 'react';
import Navbar from '../components/Navbar/Navbar';
// import Jumbotron from '../components/Jumbotron/Jumbotron';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Stocks from '../pages/Stocks';
import Logout from '../components/Logout/Logout'
import Login from '../components/Login/Login'

const Dashboard = (props) => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/stocks" component={Stocks}/>
                <Route exact path="/logout" component={Logout}/>
                <Route exact path="/login" component={Login}/>
            </Switch>
            {/* <Jumbotron/> */}
        </Router>
    )

};

export default Dashboard;