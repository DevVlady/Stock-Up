import React from 'react';

const Form = () => {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3">
                        <h2>Sign Up Form</h2>
                        <form class="signup">
                            <div class="form-group">
                                <label for="email-input">Email address</label>
                                <input type="email" class="form-control" id="email-input" placeholder="Email" />
                            </div>
                            <div class="form-group">
                                <label for="username-input">User name</label>
                                <input type="username" class="form-control" id="username-input" placeholder="Username" />
                            </div>
                            <div class="form-group">
                                <label for="password-input">Password</label>
                                <input type="password" class="form-control" id="password-input" placeholder="Password" />
                            </div>
                            <div class="form-group">
                                <label for="github-input">GitHub user name</label>
                                <input type="username" class="form-control" id="github-input" placeholder="Github User Name" />
                            </div>
                            <div style="display: none" id="alert" class="alert alert-danger" role="alert">
                                <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                <span class="sr-only">Error:</span> <span class="msg"></span>
                            </div>
                            <button type="submit" id="submitBtn" class="btn btn-default">Sign Up</button>
                            OR
                            <button type="submit" class="btn btn-default"><a href="/login/github">Use GitHub</a></button>

                        </form>
                        <br />
                        <p>Or log in <a href="/login">here</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;