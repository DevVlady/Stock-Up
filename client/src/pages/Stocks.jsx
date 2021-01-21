import React from 'react';
import Stock from '../components/Stock/Stock';
import SearchBar from '../components/Search/Search';
import axios from 'axios';


const API_KEY = process.env.ALPHA_STOCKS_API_KEY;
let StocksSymbol = '';
// let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StocksSymbol}&outputsize=full&apikey=${API_KEY}`;


class MarketStocks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stocks: [],
            search: "",
            // sortDirection: 0,
        };
    }

    componentDidMount() {
        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StocksSymbol}&outputsize=full&apikey=${API_KEY}`).then((res) => {
            this.setState({ stocks: res.data.time });
        });
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