import React from 'react';
import Navbar from '../components/Navbar/Navbar';
// import Jumbotron from '../components/Jumbotron/Jumbotron';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Footer from '../components/Footer/Footer';
import Stocks from '../pages/Stocks';
import Logout from '../components/Logout/Logout'
<<<<<<< HEAD
// import {FooterContainer} from '../containers/Footer'
=======
import Login from '../components/Login/Login'
import {FooterContainer} from '../containers/Footer'
>>>>>>> b63ea3570ac543a98f0f8172cc619c772c7a6cb1

const Dashboard = (props) => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/stocks" component={Stocks}/>
                <Route exact path="/logout" component={Logout}/>
<<<<<<< HEAD
            </Switch>
            <Jumbotron/>
            {/* <FooterContainer/> */}
=======
                <Route exact path="/login" component={Login}/>
            </Switch>
            {/* <Jumbotron/> */}
            <FooterContainer/>
>>>>>>> b63ea3570ac543a98f0f8172cc619c772c7a6cb1
        </Router>
    )

};

export default Dashboard;