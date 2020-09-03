import React, { Component } from 'react'
import Axios from 'axios';
import { Container, Row, Col, Button, Table } from "react-bootstrap";

const URL = process.env.REACT_APP_URL;

export default class TimeDisplay extends Component {  state = {
    bookings: [],
    redirect: false,
  };
  fetchItems = () => {
    let token = localStorage.getItem("token");

    Axios.get(`${URL}/booking/all`, {
      headers: {
        "x-auth-token": token,
      },
    })
      .then((res) => {
        const bookings = res.data.bookings.filter((booking)=>(
            this.props.currentDate == new Date(booking.date).toLocaleDateString()
        ));
            console.log("bookings", bookings)
        this.setState({ bookings});
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.fetchItems();
  }
    render() {
        console.log (this.props)
        return (
            <div>
                <Container>
        <Row>
          <Col className="col-1"></Col>
          <Col className="col-10 mt-5">
        <h1>{this.props.currentDate}</h1>
            <Table striped bordered hover>
              <thead>
                  <tr>
                  <th>1pm</th>
                  <th>2pm</th>
                  <th>3pm</th>
                  <th>4pm</th>
                  <th>5pm</th>
                  </tr>
              </thead>
              <tbody>
              {this.state.bookings.map(booking => (
                  <tr>
                      {(booking.timeSlot == "1pm") ?
                          <td>{booking.name} <br/>{booking.phoneNumber}</td> :
                          <td></td>}

                        {(booking.timeSlot == "2pm") ?
                          <td>{booking.name} <br/>{booking.phoneNumber} <br/>{booking.numberOfAdults}</td> :
                          <td></td>}

                          {(booking.timeSlot == "3pm") ?
                          <td>{booking.name} <br/>{booking.phoneNumber}</td> :
                          <td></td>}

                          {(booking.timeSlot == "4pm") ?
                          <td>{booking.name} <br/>{booking.phoneNumber}</td> :
                          <td></td>}

                          {(booking.timeSlot == "5pm") ?
                          <td>{booking.name} <br/>{booking.phoneNumber}</td> :
                          <td></td>}
                          
                      </tr>
              ))}
              
              </tbody>
            </Table>
          </Col>
          <Col className="col-1"></Col>
        </Row>
      </Container>
            </div>
        )
    }
}
