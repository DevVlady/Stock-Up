import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
                <Form inline>
                    {/* <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="First Name" className="mr-sm-2">First Name</Label>
                        <Input type="text" name="firstName" id="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                    </FormGroup> */}
                    {/* <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="Last Name" className="mr-sm-2">Last Name</Label>
                        <Input type="text" name="lastName" id="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                    </FormGroup> */}
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="Username" className="mr-sm-2">Username</Label>
                        <Input type="text" name="username" id="username" value={this.state.username} onChange={this.handleChange}/>
                    </FormGroup>
                    {/* <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="email" className="mr-sm-2">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="email@example.com" value={this.state.email} onChange={this.handleChange}/>
                    </FormGroup> */}
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="Password" className="mr-sm-2">Password</Label>
                        <Input type="password" name="password" id="Password" value={this.state.password} onChange={this.handleChange} />
                    </FormGroup>
                    <Button onClick={this.handleSubmit}>Submit</Button>
                    <a href="/signup">Signup</a>
                </Form>
            )
        }
    }
}

export default LoginForm;
