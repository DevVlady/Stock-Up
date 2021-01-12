import React from 'react';
import './Form.css';

const SignupForm = () => {
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
                                <label for="username-input">User name</label>
                                <input type="username" className="form-control" id="username-input" placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <label for="password-input">Password</label>
                                <input type="password" className="form-control" id="password-input" placeholder="Password" />
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
            </div>
        </div>
    );
}

export default SignupForm;