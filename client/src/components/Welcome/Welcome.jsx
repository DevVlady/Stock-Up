import React from 'react';
import './Welcome.css';
import Logo from './images/Stock_Up_Logo.png'
import { Jumbotron, Button } from 'reactstrap';


var style = {
  base: {
      background: '#060b26',
      border: 'none',
      fontSize: '30px',
      marginTop: '5px',
      marginBottom: '5px',
      marginLeft: '44%',
      color: 'red'
  },
  tron: {
      heigth: '1100px',
      background: '#2980b9'
  },
  head: {
    textAlign: 'center',
    marginBottom: '5px'
}
};


const Welcome = (props) => {
  return (
    <div>
      <Jumbotron style={style.tron}>
        <img src={Logo} alt="Logo"/>
        <h1 style={style.head} className="display-3">FUTURE...INVESTED</h1>

        <p className="lead">
          <a href="/signup"><Button style={style.base} color="primary">Sign Up</Button></a>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Welcome;

