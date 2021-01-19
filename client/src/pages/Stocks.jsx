import React from 'react';
import Stock from '../components/Stock/Stock';
import SearchBar from '../components/Search/Search';



const MarketStocks = (props) => {
    return (
        <div>
        <SearchBar/>
        <Stock/>
        </div>
    )

};

export default MarketStocks;