import React, { Component } from 'react';
import './Form.css';
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
            // <div className="SignupForm">
            // <h4>Sign up</h4>
            <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="First Name" className="mr-sm-2">First Name</Label>
                    <Input type="text" name="firstName" id="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="Last Name" className="mr-sm-2">Last Name</Label>
                    <Input type="text" name="lastName" id="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="Username" className="mr-sm-2">Username</Label>
                    <Input type="text" name="username" id="username" value={this.state.username} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="email" className="mr-sm-2">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="email@example.com" value={this.state.email} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="Password" className="mr-sm-2">Password</Label>
                    <Input type="password" name="password" id="Password" value={this.state.password} onChange={this.handleChange} />
                </FormGroup>
                <Button onClick={this.handleSubmit}>Submit</Button>
            </Form>

            // {/* <div className="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="true" data-use-continue-as="false"></div> */}


            // </div>
        )
    }
}

export default SignupForm;



// import React, { Component } from 'react';
// import './Form.css';
// import axios from 'axios';
// import Facebook from '../FaceBook Button/Facebook';


// class SignupForm extends Component {
//     constructor() {
//         super()
//         this.state = {
//             username: '',
//             password: '',
//             confirmPassword: '',

//         }
//         this.handleSubmit = this.handleSubmit.bind(this)
//         this.handleChange = this.handleChange.bind(this)
//     }
//     handleChange(event) {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     }
//     handleSubmit(event) {
//         console.log('sign-up handleSubmit, username: ')
//         console.log(this.state.username)
//         event.preventDefault()

//         //request to server to add a new username/password
//         axios.post('/signup', {
//             username: this.state.username,
//             password: this.state.password
//         })
//             .then(response => {
//                 console.log(response)
//                 if (!response.data.errmsg) {
//                     console.log('successful signup')
//                     window.location.replace('/dashboard')
//                     // this.setState({ //redirect to login page
//                     //     redirectTo: '/login'
//                     // })
//                 } else {
//                     console.log('username already taken')
//                 }
//             }).catch(error => {
//                 console.log('signup error: ')
//                 console.log(error)

//             })
//     }

//     render() {
//         return (
//             <div className="SignupForm">
//                 <h4>Sign up</h4>
//                 <form className="form-horizontal">
//                     <div className="form-group">
//                         <div className="col-1 col-ml-auto">
//                             <label className="form-label" htmlFor="username">Username</label>
//                         </div>
//                         <div className="col-3 col-mr-auto">
//                             <input className="form-input"
//                                 type="text"
//                                 id="username"
//                                 name="username"
//                                 placeholder="Username"
//                                 value={this.state.username}
//                                 onChange={this.handleChange}
//                             />
//                         </div>
//                     </div>
//                     <div className="form-group">
//                         <div className="col-1 col-ml-auto">
//                             <label className="form-label" htmlFor="password">Password: </label>
//                         </div>
//                         <div className="col-3 col-mr-auto">
//                             <input className="form-input"
//                                 placeholder="password"
//                                 type="password"
//                                 name="password"
//                                 value={this.state.password}
//                                 onChange={this.handleChange}
//                             />
//                         </div>
//                     </div>
//                     <div className="form-group ">
//                         <div className="col-7"></div>
//                         <button
//                             className="btn btn-primary col-1 col-mr-auto"
//                             onClick={this.handleSubmit}
//                             type="submit"
//                         >Sign up</button>
//                     </div>
//                     <div className="form-group ">
//                             <div className="col-7"></div>
//                             <a href="/login">Login</a>
//                     </div>
//                     <Facebook/>



//                     {/* <div className="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="true" data-use-continue-as="false"></div> */}


//                 </form>
//             </div>
//         )
//     }
// }

// export default SignupForm;