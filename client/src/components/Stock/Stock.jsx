import { use } from 'passport';
import React from 'react';

class Stock extends React.Component {
    constructor(props) {
        super(props);
        use.state = {
            stockChartXValues: [],
            stockChartYValue: []
        }
    }

    componentDidMount() {
        this.fetchStock();
    }

    fetchStock() {
        const API_KEY = process.env.ALPHA_STOCKS_API_KEY;
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=TSCO.LON&outputsize=full&apikey=${API_KEY}`;
    }

    render() {
        return(
            <div>
                <h1>Stock Market</h1>
            </div>
        )
    }
}

export default Stock;