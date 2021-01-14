import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class Facebook extends Component {
    state= {
        isLoggedIn: false,
        userId:'',
        name: '',
        email:'',
        picutre:''
    }
    
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentClicked = () => console.log("clicked")

    render() { 
        let fbContent;

        if(this.state.isLoggedIn) {
            
        } else { 
            fbContent=(<FacebookLogin
                appId="2779128549065613"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />)
        }




        return (  );
    }
}
 
export default Facebook; = () => {
    return (  );
}
 
export default ;