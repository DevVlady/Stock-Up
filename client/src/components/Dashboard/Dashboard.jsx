import "./Dashboard.css";
import Chart from "../Chart/Chart";

const Main =() => {
    return(
        <main>
            <div classname="main__container">
                <div className="main__greeting">
                    {/* need to put a prop here or the name from google once we got it right */}
                    <h1>Hello User!</h1> 
                </div>
            </div>
        </main>
    )
}