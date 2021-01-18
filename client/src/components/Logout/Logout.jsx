import axios from 'axios';
import React from 'react';
import './Logout.css';
import { Button } from 'reactstrap';
import { useHistory } from "react-router-dom";


var style = {
    base:{
        background: '#060b26',
        marginLeft: '16px',
        border: 'none',
        fontSize: '20px'
    },
    //...other styles...
};

const Logout = () => {
    let history = useHistory();
    const logout = () => {
        axios('/logout').then(res => history.push("/login"))
      }
    return (
        <div>
            <Button style={style.base} onClick={() => logout()}>Logout</Button>
        </div>
    )
}

export default Logout;
