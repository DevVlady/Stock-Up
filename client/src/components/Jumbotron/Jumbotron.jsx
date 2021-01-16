<<<<<<< HEAD
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
=======
import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Jumbo = (props) => {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Fluid jumbotron</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Jumbo;
>>>>>>> 2bb77e48b945180f52b031ebe07367045d515db3
