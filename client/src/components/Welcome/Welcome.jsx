import React from 'react';
import './Welcome.css';


// function Welcome() {
//     return (
//         <div>
//             <img src="./assets/images/ProgrammingIcon.png" alt=""/>
//             <h6>
//                 <span class="title">Dev Hangout</span>
//                 <span class="lets-hang">Let's Hangout</span>
//             </h6>
//             <h4 id="slogan">For Programmers, By Programmers</h4>
//             <h5 id="submit-message">Click continue button below to begin</h5>

//             <a href='/signup'><button id="continue-button" class="btn btn-primary">Signup</button></a>

//         </div>

//     )
// }

// export default Welcome;

// import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Welcome = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
            <a href="/signup"><Button color="primary">Learn More</Button></a>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Welcome;