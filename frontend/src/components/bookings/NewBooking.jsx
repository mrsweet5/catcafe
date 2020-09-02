import React, { Component } from "react";
import { Container, Form, Button, Row } from "react-bootstrap";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const URL = process.env.REACT_APP_URL;
class NewBooking extends Component {
  state = {
    numberOfAdults:0,
    date: new Date(),
    timeSlot: "",
    name: "",
    email: "",
    phoneNumber: "",
    bookings:[],
  };

  onChangeDate = (date) => {
      this.setState({
          date
      });
  }

  changeHandler = (e) => {
    console.log("changeHandler called: ",e.target.value)
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = () => {
    console.log(this.state);
    Axios.post(`${URL}/booking/new`, this.state)
      .then((res) => {
        console.log("done");
        this.setState({ status: true });
        window.location = '/';
      })
      .catch((err) => {
        console.log(err);
      });
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

  // filterBookings = () => {
  //   this.state.bookings.filter
  // }

  render() {
    let { numberOfAdults, date, timeSlot, name,email, phoneNumber } = this.state;

    if (this.state.status) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <Container>
        <h1>Book a Reservation</h1>
        <div>
          <Row>
          <Form.Group 
                controlId="exampleForm.ControlSelect1">
              <Form.Label>Number of Adults</Form.Label>
              <Form.Control as="select" name="numberOfAdults" onChange={this.changeHandler} value={numberOfAdults}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
              </Form.Control>
          </Form.Group>
          </Row>
          <Row>
            <DatePicker
            selected = {date}
            onChange={this.onChangeDate}
            />
          </Row>
          <Row>
            <Form.Group 
                controlId="exampleForm.ControlSelect1">
              <Form.Label>Time Slot</Form.Label>
              <Form.Control as="select" name="timeSlot" onChange={this.changeHandler} value={timeSlot}>
                  <option value="1">1pm</option>
                  <option value="2">2pm</option>
                  <option value="3">3pm</option>
                  <option value="4">4pm</option>
                  <option value="5">5pm</option>
              </Form.Control>
          </Form.Group>
          </Row>
          <Row>
            <Form.Control
              placeholder="Name"
              name="name"
              value={name}
              onChange={this.changeHandler}
            />
          </Row>
          <Row>
            <Form.Control
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.changeHandler}
            />
          </Row>
          <Row>
            <Form.Control
              placeholder="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={this.changeHandler}
            />
          </Row>
          <Button onClick={this.submitHandler}>Submit</Button>
          
        </div>
        </Container>
      </div>
    );
  }
}

export default NewBooking;