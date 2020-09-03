import React, { Component } from "react";
import Axios from "axios";
import DateDisplay from "../components/tables/DateDisplay"
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import Navigation from "./Navigation";


const URL = process.env.REACT_APP_URL;

export default class AdminDashboard extends Component {
    state = {
        errorMessage: null,
        isAuth: false,
        user: null,
        currentDate:''
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
      }
    render() 
    {  let { isAuth, user, errorMessage } = this.state;
        return (
            <div>
                <Navigation user={user} logout={this.logoutHandler} />
                <DateDisplay displayTimeHandler={(v)=>{this.props.displayTimeHandler(v)}} />
            </div>
        )
    }
}
