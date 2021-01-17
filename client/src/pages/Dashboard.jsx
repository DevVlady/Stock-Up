import React from 'react';
// import API from '../utils/API';
import Navbar from '../components/Navbar/Navbar';
import StockContext from '../utils/stockContext';
// import Logout from '../components/Logout/Logout';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import SearchBar from '../components/Search/Search'


const Dashboard = (props) => {
    return (
        <StockContext.Provider>
            <Navbar/>
            <Jumbotron/>
            <SearchBar/>
            {/* <Logout/> */}
        </StockContext.Provider>
    )

};

export default Dashboard;