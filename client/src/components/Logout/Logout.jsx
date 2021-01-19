import axios from 'axios';
import React from 'react';
import { Button } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { IoMdPower } from 'react-icons/io';


var style = {
    base: {
        background: '#060b26',
        marginLeft: '20px',
        border: 'none',
        fontSize: '19px',
        marginTop: '8px',
    },
    icon: {
        fontSize: '22px',
        marginRight: '10px',
        marginLeft: '1px',
    }
};

const Logout = () => {
    let history = useHistory();
    const logout = () => {
        axios('/logout').then(res => history.push("/login"))
    }
    return (
        <div>
            <Button style={style.base} onClick={() => logout()}><IoMdPower style={style.icon} />   Logout</Button>
        </div>
    )
}

export default Logout;
