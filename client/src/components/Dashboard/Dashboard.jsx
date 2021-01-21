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
                        <i
                            className="fa fa-user-o fa-2x text-lightblue"
                            aria-hidden="true"></i>
                            <div className="card_inner">
                                <p className="text-primary-p"> Number of Stock Transactions a Min</p>
                                <span className="font-bold text-title">578</span>
                            </div>
                    </div>
                </div>



            </div>


        </main>


    )
}