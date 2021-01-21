import React, { Component } from 'react';
import './Signup.css';
import axios from 'axios';
import GoogleBtn from '../Google oAUth Button/GoogleBtn';
//import GoogleLogin from 'react-google-login';
// import Facebook from '../FaceBook Button/Facebook';
// import SignupForm from './components/SignUpForm/Form';
// import FacebookLogin from 'react-facebook-login';

let loginPath = (process.env.NODE_ENV === "production") ? "https://my-stock-up.herokuapp.com/auth/google" : "http://localhost:3001/auth/google"

class SignupForm extends Component {
    //Used for Google Signin
    responseGoogle=(response)=> {
        console.log(response);
        console.log(response.profileObj);
    }

    constructor() {
        super()
        this.state = {
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        console.log('sign-up handleSubmit, username: ')
        console.log(this.state.username)
        event.preventDefault()

        //request to server to add a new username/password
        axios.post('/signup', {
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        })
            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    console.log('successful signup')
                    window.location.replace('/dashboard')

                } else {
                    console.log('username already taken')
                }
            }).catch(error => {
                console.log('signup error: ')
                console.log(error)

            })
    }

    render() {
        return (
            <form className="signupForm">
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label for="First Name">First Name</label>
                    <input type="text" name="firstName" className="form-control" placeholder="First name" value={this.state.firstName} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label for="Last Name">Last name</label>
                    <input type="text" name="lastName" className="form-control" placeholder="Last name" value={this.state.lastName} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label for="Username">Username</label>
                    <input type="text" name="username" className="form-control" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label >Email address</label>
                    <input type="text" name="email" className="form-control" placeholder="email@example.com" value={this.state.email} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label for="Password">Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.handleChange} />
                </div>
                <button onClick={this.handleSubmit} type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered? <a href="/login">Sign-In HERE?</a>
                </p>
                {/* <GoogleBtn/> */}
                {/* <a as="a" href={loginPath}> <button
                    type="button" className="btn btn-gplus btn-danger"> <i className='fab fa-google-plus-g pr-1'>Google</i>
                    </button></a> */}
                {/* <GoogleLogin
                clientId="984123359552-m0q70i6c34gfb986tk9bbvobjh9k8huq.apps.googleusercontent.com"
                buttonText="Sign-in with Google"
                href={loginPath}
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
                /> */}
            </form>)
    }
}

export default SignupForm;