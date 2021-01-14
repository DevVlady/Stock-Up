<<<<<<< HEAD
import React, { useState } from 'react';
import './Form.css';
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';
// import './App.css';

const SignupForm = () => {

    const [login, setLogin] = useState(false);
    const [data, setData] = useState({});
    const [picture, setPicture] = useState('');

    const responseFacebook = (response) => {
        console.log(response);
        setData(response);
        setPicture(response.picture.data.url);
        if (response.accessToken) {
            setLogin(true);
        } else {
            setLogin(false);
        }
    }
    
    return (
        <div>
            <div className="container">
                <div className="row center">
                    <div className="col-md-6 col-md-offset-3">
                        <h2>Sign Up Form</h2>
                        <form className="signup">
                            <div className="form-group">
                                <label for="email-input">Email address</label>
                                <input type="email" className="form-control" id="email-input" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <label for="firstName-input">First Name</label>
                                <input type="firstName" className="form-control" id="firstName-input" placeholder="First Name" />
                            </div>
                            <div className="form-group">
                                <label for="lastName-input">Last Name</label>
                                <input type="lastName" className="form-control" id="lastName-input" placeholder="Last Name" />
                            </div>
                            <div className="form-group">
                                <label for="lastName-input">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                            </div>
                            <div id="alert" className="alert alert-danger display2" role="alert">
                                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                <span className="sr-only">Error:</span> <span className="msg"></span>
                            </div>
                            <button type="submit" id="submitBtn" className="btn btn-default">Sign Up</button>
                            OR
                            <button type="submit" className="btn btn-default"><a href="/login/github">Use GitHub</a></button>
                        </form>
                        <br />
                        <p>Or log in <a href="/login">here</a></p>
                    </div>
                </div>
                <Card style={{ width: '600px' }}>
                    <Card.Header>
                        {!login &&
                            <FacebookLogin
                                appId="562118384400275"
                                autoLoad={true}
                                fields="name,email,picture"
                                scope="public_profile,user_friends"
                                callback={responseFacebook}
                                icon="fa-facebook" />
                        }
                        {login &&
                            <Image src={picture} roundedCircle />
                        }
                    </Card.Header>
                    {login &&
                        <Card.Body>
                            <Card.Title>{data.name}</Card.Title>
                            <Card.Text>
                                {data.email}
                            </Card.Text>
                        </Card.Body>
                    }
                </Card>
=======
import React, { Component } from 'react';
import './Form.css';
import axios from 'axios';


class SignupForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',

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
        axios.post('/user/', {
            username: this.state.username,
            password: this.state.password
        })
            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    console.log('successful signup')
                    this.setState({ //redirect to dashboard page
                        redirectTo: '/dashboard'
                    })
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
            <div className="SignupForm">
                <h4>Sign up</h4>
                <form className="form-horizontal">
                    <div className="form-group">
                        <div className="col-1 col-ml-auto">
                            <label className="form-label" htmlFor="username">Username</label>
                        </div>
                        <div className="col-3 col-mr-auto">
                            <input className="form-input"
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Username"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-1 col-ml-auto">
                            <label className="form-label" htmlFor="password">Password: </label>
                        </div>
                        <div className="col-3 col-mr-auto">
                            <input className="form-input"
                                placeholder="password"
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group ">
                        <div className="col-7"></div>
                        <button
                            className="btn btn-primary col-1 col-mr-auto"
                            onClick={this.handleSubmit}
                            type="submit"
                        >Sign up</button>
                    </div>
                    <div className="form-group ">
                            <div className="col-7"></div>
                            <a href="/login">Login</a>
                        </div>
                </form>
>>>>>>> d168eb295f7a2b8e7bab81fa9cec6337e543c14a
            </div>
        )
    }
}

export default SignupForm;