import React, { Component } from "react";
import Axios from "axios";
import DateDisplay from "../components/tables/DateDisplay"
import { Container, Row, Col, Button, Table } from "react-bootstrap";


const URL = process.env.REACT_APP_URL;

export default class AdminDashboard extends Component {

    render() 
    { 
        console.log(this.props)
        return (
            <div>
                <DateDisplay displayTimeHandler={(v)=>{this.props.displayTimeHandler(v)}} />
            </div>
        )
    }
}

//