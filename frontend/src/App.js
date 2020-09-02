import React, { Component } from 'react'

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import NewBooking from "./components/bookings/NewBooking"
import PrivateRoute from "./components/PrivateRoute";
import AdminDashboard from "./components/AdminDashboard";
import Navigation from "./components/Navigation";
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
          // errorMessage: err.response.data.message,
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

  logoutHandler = (e) => {
    e.preventDefault();
    console.log("i logged out");
    this.setState({
      items: [],
      errorMessage: null,
      isAuth: false,
      user: null,
    });

    localStorage.removeItem("token");
  };
  
  render() {
    let { isAuth, user, errorMessage } = this.state;
    return (
      <Router>
        <Navigation user={user} logout={this.logoutHandler} />
        <Switch>
        <PrivateRoute exact path="/admin" isAuth={isAuth} component={AdminDashboard} />
          <Route
              path="/register"
              exact
              render={() => <Register register={this.registerHandler} />}
            />
            <Route
              path="/login"
              exact
              render={() =>
                isAuth ? <Redirect to="/admin" /> : <Login login={this.loginHandler} />
              }
            />
            <Route
              path="/booking"
              component = {NewBooking}
            />
        </Switch>
      </Router>
    )
  };
}

