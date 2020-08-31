import React, { Component } from 'react'
import logo from './logo.svg';
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import Axios from "axios";
import './App.css';

const URL = process.env.REACT_APP_URL;
export default class App extends Component {
  state = {
    items: [],
    errorMessage: null,
    isAuth: false,
    user: null,
  };
  getUserProfile = (token) => {
    Axios.get(`${URL}/auth/user`, {
      headers: {
        "x-auth-token": token,
      },
    })
      .then((res) => {
        // console.log(res.data);

        this.setState({
          isAuth: true,
          user: res.data.user,
        });
      })
      .catch((err) => {
        // console.log(err);
        // this.setState({
        //   isAuth: false,
        // });
      });
  };

  loginHandler = (credentials) => {
    //login here
    Axios.post(`${URL}/auth/login`, credentials)
      .then((res) => {
        console.log(res.data);

        localStorage.setItem("token", res.data.token);
        this.getUserProfile(res.data.token); //get uptodate user information

        this.setState({
          isAuth: true,
        });
      })
      .catch((err) => {
        // console.log(err);
        this.setState({
          isAuth: false,
          errorMessage: err.response.data.message,
        });
      });
  };

  registerHandler = (credentials) => {
    //login here
    Axios.post(`${URL}/auth/register`, credentials)
      .then((res) => {
        console.log(res.data);

        localStorage.setItem("token", res.data.token);
        this.setState({
          isAuth: true,
        });
      })
      .catch((err) => {
        // console.log(err);
        this.setState({
          isAuth: false,
        });
      });
  };
  render() {
    let { isAuth, user, errorMessage } = this.state;
    return (
      <Router>
        <Switch>
          <Route
              path="/register"
              exact
              render={() => <Register register={this.registerHandler} />}
            />
            <Route
              path="/login"
              exact
              render={() =>
                isAuth ? <Redirect to="/" /> : <Login login={this.loginHandler} />
              }
            />
        </Switch>
      </Router>
    )
  };
}

