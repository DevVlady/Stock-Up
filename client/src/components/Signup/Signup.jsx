import React, { Component } from 'react';
import './Signup.css';
import axios from 'axios';
// import Facebook from '../FaceBook Button/Facebook';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


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
            <div className="cointainer">
                <div className='signupForm'>
                    <Form inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="First Name" className="mr-sm-2">First Name</Label>
                            <Input type="text" name="firstName" id="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="Last Name" className="mr-sm-2">Last Name</Label>
                            <Input type="text" name="lastName" id="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="Username" className="mr-sm-2">Username</Label>
                            <Input type="text" name="username" id="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="email" className="mr-sm-2">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="email@example.com" value={this.state.email} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="Password" className="mr-sm-2">Password</Label>
                            <Input type="password" name="password" id="Password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                        </FormGroup>
                        <Button onClick={this.handleSubmit}>Submit</Button>
                        <br />
                        OR
                        <a href="/login">Login</a>
                    </Form>
                </div>
                {/* // <div className="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="true" data-use-continue-as="false"></div> */}
            </div>
        )
    }
}

export default SignupForm;