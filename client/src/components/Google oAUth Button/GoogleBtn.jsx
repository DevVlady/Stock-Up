import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';

export class GoogleBtn extends Component {

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
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_orgin'}
                />
            </div>
        )
    }
}

export default GoogleBtn;
