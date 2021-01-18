import './App.css';
import axios from 'axios'
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import NotExist from './pages/NotExist';
import Stocks from './pages/Stocks';
import Logout from './components/Logout/Logout';
import { FooterContainer} from './containers/Footer';
// import { GlobalStyles } from './global-styles';
import Navbar from './components/Navbar/Navbar';



class App extends Component {
  // const BASE_NAME = "/Stock-Up";
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      lastName: null,
      firstName: null,
      email: null,
      sessionToken: '',
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

  // logout = () => {
  //   this.setState({ sessionToken: ''});
  //   localStorage.clear();
  // }

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
      <Router>
        <Navbar/>
        {/* <GlobalStyles/> */}
        <div>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/Stock-up" component={Welcome} />
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/stocks" component={Stocks} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout}/>
            <Route exact path="/nomatch" component={NotExist} />
        </div>
        <FooterContainer/>

      </Router>
    );
    }
}

export default App;
