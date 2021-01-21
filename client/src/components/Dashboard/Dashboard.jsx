import "./Dashboard.css";
import Chart from "../Chart/Chart";

const Dashboard = () => {
    return (
        <main>
            <div className="main__container">
                <div className="main__title">
                    <div className="main__greeting">
                        <h1>Hello Stock Up User</h1>
                        <p>Welcome to your finacial Dashboard</p>
                    </div>
                </div>

                {/* <!-- MAIN CARDS STARTS HERE --> */}
                <div className="main__cards">
                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-lightblue"
                            aria-hidden="true"
                        ></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Stock Transactions a Min</p>
                            <span className="font-bold text-title">578</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Options</p>
                            <span className="font-bold text-title">2467</span>
                        </div>
                    </div>

                    <div className="card">
                        {/* <i
                            className="fa fa-video-camera fa-2x text-yellow"
                            aria-hidden="true"
                        ></i> */}
                        <div className="card_inner">
                            <p className="text-primary-p">Percentage of Growth</p>
                            <span className="font-bold text-title">2.3%</span>
                        </div>
                    </div>

                    <div >
                        {/* <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i> */}
                        <div className="card_inner">
                            <img src="https://static.twentyoverten.com/5a859cb98cd42f3a175b244a/0qcjBl_NTTZ/portfoliochart.png" className="stockPie" />
                            <span className="font-bold text-title"></span>
                        </div>
                    </div>
                </div>
                {/* <!-- MAIN CARDS ENDS HERE --> */}

                {/* <!-- CHARTS STARTS HERE --> */}
                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Newark, New Jersey, USA</p>
                            </div>
                            <i className="fa fa-usd" aria-hidden="true"></i>
                        </div>
                        <Chart />
                    </div>

                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Triolgy Worth</h1>
                                <p>New York City</p>
                            </div>
                            <i className="fa fa-usd" aria-hidden="true"></i>
                        </div>

                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Sold For</h1>
                                <p>$750 Million</p>
                            </div>

                            <div className="card2">
                                <h1>Annual Gross Profit</h1>
                                <p>$135 Million</p>
                            </div>

                            <div className="card3">
                                <h1>Users</h1>
                                <p>3900</p>
                            </div>

                            <div className="card4">
                                <h1>Number of Colleges working with</h1>
                                <p>63</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- CHARTS ENDS HERE --> */}
            </div>
        </main>
    );
};

export default Dashboard;