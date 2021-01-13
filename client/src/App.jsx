import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import NoMatch from './pages/NoMatch';
import Wrapper from './components/Wrapper/Wrapper';
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';



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
}

export default App;
