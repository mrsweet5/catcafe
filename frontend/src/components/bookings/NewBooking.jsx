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
    timeSlot: "1pm",
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
  render() {
    let { numberOfAdults, date, timeSlot, name,email, phoneNumber } = this.state;
    if (this.state.status) {
      return <Redirect to="/" />;
    }
    return (
      <div>
                 
        <h1 className="headhead">Booking</h1>
        <form id="form">
        <Form.Group 
                controlId="exampleForm.ControlSelect1" className ="styling">
              <Form.Label>Number of Adults</Form.Label>
              <Form.Control as="select" name="numberOfAdults" onChange={this.changeHandler} value={numberOfAdults}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
              </Form.Control>
          </Form.Group>

          <DatePicker className= "mb-2 styling"
            selected  = {date}
            onChange={this.onChangeDate} dateFormat="dd/MM/yyyy"
            />
            
            <Form.Group 
                controlId="exampleForm.ControlSelect1" className ="styling mt-2">
              <Form.Label>Time Slot</Form.Label>
              <Form.Control as="select" name="timeSlot" onChange={this.changeHandler} value={timeSlot} >
                  <option value ="1pm">1pm</option>
                  <option value="2pm">2pm</option>
                  <option value="3pm">3pm</option>
                  <option value="4pm">4pm</option>
                  <option value="5pm">5pm</option>
              </Form.Control>
          </Form.Group>

          <Form.Control name="name" placeholder="NAME" value={name} id="input" type="text" className ="styling mb-3" 
          onChange={this.changeHandler} />

          <Form.Control name="email" type="text" placeholder="E-MAIL" value={email} id="input" className ="styling mb-3"
            onChange={this.changeHandler} />

          <Form.Control name="phoneNumber" type="text" placeholder="PHONE NUMBER" id="input" className ="styling mb-3"
            value={phoneNumber}
            onChange={this.changeHandler} />

          <input id="submit" type="submit" onClick={this.submitHandler} Submit/>
        </form>
            </div>
    );
  }
}
export default NewBooking;