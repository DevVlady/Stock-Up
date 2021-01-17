import React from 'react';

class Stock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stockChartXValues: [],
            stockChartYValue: []
        }
    }

    componentDidMount() {
        this.fetchStock();
    }

    fetchStock() {
        const mousePosition = this;
        console.log(mousePosition);
        const API_KEY = process.env.ALPHA_STOCKS_API_KEY;
        let StocksSymbol = 'AAPL';
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StocksSymbol}&outputsize=full&apikey=${API_KEY}`;

        fetch(API_Call)
            .then(
                function(response) {
                    return response.json();
                }
            )
            .then(
                function(data) {
                    console.log(data);
                }
            )
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