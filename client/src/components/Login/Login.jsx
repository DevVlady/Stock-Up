import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Login.css';

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
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
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    console.log('***REDIRECT to DASHBOARD')
                    // update App.js state
                    // this.props.updateUser({
                    //     loggedIn: true,
                    //     username: response.data.username
                    // })
                    // update the state to redirect to home
                    // this.setState({
                    //     redirectTo: '/'
                    // })
                    window.location.replace('/dashboard')
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <form className="loginForm">
                    <h3>Sign In</h3>
                    <div className="form-group">
                        <label for="Username">Username</label>
                        <input type="text" name="username" id="username" className="form-control" placeholder="Enter username" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="Password">Password</label>
                        <input type="password" name="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>
                    <button onClick={this.handleSubmit} type="submit" className="btn btn-primary btn-block">Submit</button>
                    <p className="forgot-password text-right">
                        New User? <a href="/signup"> Signup HERE</a>
                    </p>
                </form>)
        }
    }
}

export default LoginForm;
