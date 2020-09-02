import React, { Component } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import Axios from "axios";
import Moment from 'react-moment';

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
            console.log('date', b.date.split('T')[0]);
            console.log('currrentDate', currentDate);
            if (b.date.split('T')[0] !== currentDate){
              bookingsArray.push(b);
              currentDate = b.date.split('T')[0];
            }else{
              let total = 0 ;
              total = bookingsArray[bookingsArray.length-1].numberOfAdults + b.numberOfAdults;
              let currentBooking = bookingsArray[bookingsArray.length-1];
              bookingsArray[bookingsArray.length-1] = {...currentBooking,numberOfAdults: total}; 
            }
          });
        this.setState({ bookings: bookingsArray });
        // }
        // console.log(this.state.bookings);
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
                        <td><Moment format="D MMM YYYY" withTitle>{booking.date}</Moment></td>
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
