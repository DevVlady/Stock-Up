// import axios from 'axios';
import React from 'react';
import { Button } from 'reactstrap';
// import { useHistory } from "react-router-dom";
// import { IoMdPower } from 'react-icons/io';


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

let logoutPath = (process.env.NODE_ENV === "production") ? "" : "http://localhost:3001/auth/logout"

const Logout = () => {
    // let history = useHistory();
    // const logout = () => {
    //     axios('/logout').then(res => history.push("/login"))
    // }
    return (
        <div>
            <a href={logoutPath}> <Button style={style.base} > Logout</Button></a>

        </div>
    )
}

export default Logout;
