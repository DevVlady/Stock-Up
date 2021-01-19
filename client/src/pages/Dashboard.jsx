import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';

let loginPath = (process.env.NODE_ENV === "production") ? "" : "http://localhost:3001/auth/google"

export class Dashbooard extends Component {

    responseGoogle=(response)=> {
        console.log(response);
        console.log(response.profileObj);
    }

    render() {
        return (
            <div>
                <GoogleLogin
                clientId="984123359552-m0q70i6c34gfb986tk9bbvobjh9k8huq.apps.googleusercontent.com"
                buttonText="Log In"
                href={loginPath}
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
                />
            </div>
        )
    }
}

export default Dashbooard;
