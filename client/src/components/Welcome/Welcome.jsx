import React from 'react';
import './Welcome.css';

function Welcome() {
    return (
        <div>
            <img src="./assets/images/ProgrammingIcon.png" alt=""/>
            <h6>
                <span class="title">Dev Hangout</span>
                <span class="lets-hang">Let's Hangout</span>
            </h6>
            <h4 id="slogan">For Programmers, By Programmers</h4>
            <h5 id="submit-message">Click continue button below to begin</h5>

            <a href='./signup.html'><button id="continue-button" class="btn btn-primary">Continue</button></a>

        </div>

    )
}

export default Welcome;