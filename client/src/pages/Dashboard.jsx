// import API from '../utils/API';
import React from 'react';
import Navbar from './components/Navbar/navbar';

import StockContext from '../utils/stockContext';

function Stock() {


    return (
        <StockContext.Provider>
            <Navbar/>
        </StockContext.Provider>
    )
}

export default Stock;