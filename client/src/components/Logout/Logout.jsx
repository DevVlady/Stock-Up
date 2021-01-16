import axios from 'axios';
import React from 'react';
// import { Button } from 'reactstrap';
// import {Redirect} from "react-dom"
import { Redirect } from "react-router-dom";
import { Button } from 'reactstrap';



const Logout = () => {
    axios.get('/logout')
        .then(() => {
            // React.redirect('/login')
            <Redirect to = {{pathname: '/login'}}/>
        })

    return (
        <div>
      <Button color="danger">danger</Button>{' '}
    </div>
    )
  }

export default Logout;
