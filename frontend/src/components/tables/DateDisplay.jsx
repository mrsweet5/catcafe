import React, { Component } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import Axios from "axios";
import TimeDisplay from './TimeDisplay'

const URL = process.env.REACT_APP_URL;


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
          let sortedBookings = res.data.bookings.sort((a, b)=> Date.parse (a.date) - Date.parse(b.date));
          let bookingsArray = []; 
          let currentDate;
          sortedBookings.forEach( (b, i)=>{
            const bookingDate = new Date(b.date).toLocaleDateString() 
          console.log(bookingDate);
            if (bookingDate.split('T')[0] !== currentDate){
              b.date = bookingDate;
              bookingsArray.push(b);
              currentDate = b.date.split('T')[0];
            }else{
              let total = 0 ;
              total = bookingsArray[bookingsArray.length-1].numberOfAdults + b.numberOfAdults;
              let currentBooking = bookingsArray[bookingsArray.length-1];
              bookingsArray[bookingsArray.length-1] = {...currentBooking,numberOfAdults: total}; 
            }
          });
          console.log(bookingsArray);
        this.setState({ bookings: bookingsArray });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.fetchItems();
  }

displayTimeHandler = (e) => {
  console.log (e.target.value)
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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
      
                    {this.state.bookings.map((booking, i) => (
                      <tr key={i}>
                        <td>{i}</td>
                        <td>{booking.date}</td>
                        <td>{booking.numberOfAdults}
                        </td>
                        <td><Button variant ="info" value={booking.date} onClick ={this.displayTimeHandler}  >View</Button></td>
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
