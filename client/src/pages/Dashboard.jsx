import React from 'react';
// import API from '../utils/API';
import Navbar from '../components/Navbar/Navbar';
import StockContext from '../utils/stockContext';
// import Jumbotron from '../components/Jumbotron/Jumbotron';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import Footer from "../components/Footer/footer";
import Sidebar from '../components/Sidebar/Sidebar';


function Stock() {


    return (
        <div className="App">
            <StockContext.Provider>

                <Navbar />
                <Sidebar/>
                {/* <Jumbotron>/
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron> */}
                {/* <Footer/> */}
                {/* <Jumbotron /> */}
            </StockContext.Provider>
        </div>
    )
}

export default Stock;