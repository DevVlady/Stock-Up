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