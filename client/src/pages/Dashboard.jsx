import React from 'react';
// import API from '../utils/API';
import Navbar from '../components/Navbar/navbar';
import StockContext from '../utils/stockContext';
// import Signout from '../components/Signout/Signout';

function Stock() {


    return (
        <StockContext.Provider>
            <Navbar/>
            {/* <Signout/> */}
        </StockContext.Provider>
    )
}

export default Stock;