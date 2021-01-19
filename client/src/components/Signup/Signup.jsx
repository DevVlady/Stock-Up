import React, { Component } from 'react';
import './Signup.css';
import axios from 'axios';
// import Facebook from '../FaceBook Button/Facebook';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

// import SignupForm from './components/SignUpForm/Form';
// import FacebookLogin from 'react-facebook-login';

class SignupForm extends Component {
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
                    // this.setState({ //redirect to login page
                    //     redirectTo: '/login'
                    // })
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
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered? <a href="/login">Sign-In HERE?</a>
                </p>
            </form>)
    }
}

export default SignupForm;