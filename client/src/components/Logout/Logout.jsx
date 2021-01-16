import axios from 'axios';
import React from 'react';
// import { Button } from 'reactstrap';
// import {Redirect} from "react-dom"
// import { Redirect } from "react-router-dom";
import { Button } from 'reactstrap';
import { useHistory } from "react-router-dom";


const Logout = () => {
    let history = useHistory();
    const logout = () => {
        axios('/logout').then(res => history.push("/login"))
      }
    return (
        <div>
            <Button onClick={() => logout()}>Logout</Button>
        </div>
    )
}

export default Logout;
