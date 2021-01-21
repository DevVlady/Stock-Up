import React from 'react';
import Stock from '../components/Stock/Stock';
import SearchBar from '../components/Search/Search';
import axios from 'axios';



class MarketStocks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stocks: [],
            search: "",
            // sortDirection: 0,
        };
    }

    render(){
        return (
            <div>
            <SearchBar/>
            <Stock/>
            </div>
        )
    }
};

export default MarketStocks;