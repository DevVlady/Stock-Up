import "./Dashboard.css";
import Chart from "../Chart/Chart";

const Main = () => {
    return (
        <main>
            <div classname="main__container">
                <div className="main__title">
                    <div className="main__greeting">
                        {/* need to put a prop here or the name from google once we got it right */}
                        <h1>Hello User!</h1>
                        <p>Welcome to Stock-Up Dashboard. All the Information you want</p>
                    </div>
                </div>

                <div className="main__cards">
                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-lightblue"
                            aria-hidden="true"></i>
                        <div className="card_inner">
                            <p className="text-primary-p"> Number of Stock Transactions a Min</p>
                            <span className="font-bold text-title">578</span>
                        </div>
                    </div>
                    {/* New card */}
                    <div className="card">
                        <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Stock Options</p>
                            <span className="font-bold text-title">2467</span>
                        </div>
                    </div>
                    {/* New Card */}
                    <div className="card">
                        <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Year To Date Growth on Portfolio</p>
                            <span className="font-bold text-title">2.1%</span>
                        </div>
                    </div>

                    <div >
                        {/* <i    className="fa fa-thumbs-up fa-2x text-green"
                            aria-hidden="true"
                        ></i> */}
                        <div className="card_inner">
                            <img src="https://static.twentyoverten.com/5a859cb98cd42f3a175b244a/0qcjBl_NTTZ/portfoliochart.png" className="stockPie" />
                            <span className="font-bold text-title"></span>
                        </div>
                    </div>

                    <div className="charts">
                        <div className="charts__left">
                            <div className="charts__left_title">
                                <div>
                                    <h1>Daily Reports</h1>
                                    <p>Newark, NJ</p>
                                </div>
                                <i className="fa fa-usd" aria-hidden="true"></i>
                            </div>
                            <Chart/>
                        </div>
                    </div>



                </div>



            </div>


        </main>


    )
}