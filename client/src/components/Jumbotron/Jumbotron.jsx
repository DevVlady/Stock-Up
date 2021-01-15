import React from "react";
import "./jumbotron.css";

const Jumbotron = () => {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Fluid jumbotron</h1>
                    <p className="lead text-center">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>

        </div>
    );
}

export default Jumbotron;