import React, { Component } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import Axios from "axios";

export default class DateDisplay extends Component {
  state = {
    bookings: [],
  };
  fetchItems = () => {
    let token = localStorage.getItem("token");

    Axios.get(`${URL}/booking/all`, {
      headers: {
        "x-auth-token": token,
      },
    })
      .then((res) => {
        console.log(res.data);
        // if (this.mounted) {
        this.setState({ bookings: res.data.bookings });
        // }
        console.log(this.state.bookings);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.fetchItems();
  }
  render() {
    return (
      <Container>
        <Row>
          <Col className="col-1"></Col>
          <Col className="col-10 mt-5">
          <h1>Booking list</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Date </th>
                  <th>Number of Bookings</th>
                  <th>Time Slot</th>
                </tr>
              </thead>
              <tbody>
      
                    {this.state.bookings.map((booking, i) => (
                      <tr key={i}>
                        <td>{i}</td>
                        <td>{booking.date}</td>
                        <td>{booking.numberOfAdults}
                        </td>
                        <td>{booking.timeSlot}</td>
                      </tr>
                    ))}
              </tbody>
            </Table>
          </Col>
          <Col className="col-1"></Col>
        </Row>
      </Container>
    );
  }
}
