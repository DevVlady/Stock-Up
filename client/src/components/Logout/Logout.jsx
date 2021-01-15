import axios from 'axios';
import React from 'react';
import { Button } from 'reactstrap';
// import {Redirect} from "react-dom"



const Logout = () => {
    axios.get('/logout')
        .then(() => {
            React.redirect
        })
  }

export default Logout;
