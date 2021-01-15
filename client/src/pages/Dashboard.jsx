import React from 'react';
// import API from '../utils/API';
import Navbar from '../components/Navbar/navbar';
import StockContext from '../utils/stockContext';
// import Logout from '../components/Logout/Logout';
import Jumbotron from '../components/Dashboard/dashboard'

function Stock() {


    return (
        <StockContext.Provider>
            <Navbar/>
            <Jumbotron/>
            {/* <Logout/> */}
        </StockContext.Provider>
    )
}

export default Stock;