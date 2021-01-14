import './App.css';
<<<<<<< HEAD
import React, {useState} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
=======
import axios from 'axios'
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Route, Link } from 'react-router-dom'
>>>>>>> d168eb295f7a2b8e7bab81fa9cec6337e543c14a
import Signup from './pages/SignUp';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import NoMatch from './pages/NoMatch';
import Wrapper from './components/Wrapper/Wrapper';
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';



<<<<<<< HEAD
function App() {
  const BASE_NAME = "/Stock-Up";
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
    <Router basename={`${BASE_NAME}`}>
      <div>
        <Wrapper>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/Stock-up" component={Welcome} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/nomatch" component={NoMatch} />
        </Wrapper>
      </div>
    </Router>
  );
=======
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

  updateUser(userObject) {
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
            <Route exact path="/signup" render={() =>
              <Signup />}
            />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" render={() =>
              <Login
                updateUser={this.updateUser}
              />}
            />
            <Route exact path="/nomatch" component={NoMatch} />
          </Wrapper>
        </div>
      </Router>
    );
  }
>>>>>>> d168eb295f7a2b8e7bab81fa9cec6337e543c14a
}

export default App;
