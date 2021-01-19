import React from 'react';
import './Welcome.css';
import Logo from './images/Stock_Up_Logo.png'

import { Jumbotron, Button } from 'reactstrap';

const Welcome = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">The FUTURE is here</h1>
        <img src={Logo} alt="Logo"/>
        <hr className="my-2" />
        <p className="lead">
          <a href="/signup"><Button style={{fontSize: '25px'}} color="primary">Sign Up</Button></a>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Welcome;

