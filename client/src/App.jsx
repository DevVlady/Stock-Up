import './App.css';
import axios from 'axios'
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import { Route, Link } from 'react-router-dom'
import Signup from './pages/SignUp';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import NoMatch from './pages/NoMatch';
import Wrapper from './components/Wrapper/Wrapper';

class App extends Component {
  // const BASE_NAME = "/Stock-Up";
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      //basename={`${BASE_NAME}`}
      <Router>
        <div>
          <Wrapper>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/Stock-up" component={Welcome} />
            <Route exact path="/welcome" component={Welcome} />
        <Route
          path="/login"
          render={() =>
            <Login
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup/>}/>
            <Route exact path="/nomatch" component={NoMatch} />
          </Wrapper>
        </div>
      </Router>
    );

  }
}

export default App;
