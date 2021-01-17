import React from 'react';
// import API from '../utils/API';
import Navbar from '../components/Navbar2/Navbar2';
import StockContext from '../utils/stockContext';
// import Logout from '../components/Logout/Logout';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import SearchBar from '../components/Search/Search'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const Dashboard = (props) => {
    return (
        // <StockContext.Provider>
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" component={Signup}/>
            </Switch>
            <Jumbotron/>
            {/* <SearchBar/> */}
            {/* <Logout/> */}
        {/* // </StockContext.Provider> */}
        </Router>
    )

};

export default Dashboard;