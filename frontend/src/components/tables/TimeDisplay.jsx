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
        let oneVar =[];
        let twoVar=[];
        let threeVar=[];
        let fourVar=[];
        let fiveVar=[];

        this.state.bookings.map((b)=>{
            if (b.timeSlot == "1pm") {
                oneVar.push(b)
            }
            else if (b.timeSlot == "2pm"){
                twoVar.push(b)
            }
            else if (b.timeSlot == "3pm"){
                threeVar.push(b)
            }
            else if (b.timeSlot == "4pm"){
                fourVar.push(b)
            }
            else if (b.timeSlot == "5pm"){
                fiveVar.push(b)
            }
        })
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
                <tr>
                    <td>
                        {oneVar.map((one)=>(
                        <span>
                        <p>Number of Adults: {one.numberOfAdults}</p>
                        <p>Name: { one.name }</p>
                        <p>Email: { one.email }</p>
                        <p>Phone Number: { one.phoneNumber }</p>
                        <hr/>
                        </span>
                        ))}
                    </td>
                    <td>
                    {twoVar.map((two)=>(
                        <span>
                        <p>Number of Adults: {two.numberOfAdults}</p>
                        <p>Name: { two.name }</p>
                        <p>Email: { two.email }</p>
                        <p>Phone Number: { two.phoneNumber }</p>
                        <hr/>
                        </span>
                        ))}
                    </td>
                    <td>
                    {threeVar.map((three)=>(
                        <span>
                        <p>Number of Adults: {three.numberOfAdults}</p>
                        <p>Name: { three.name }</p>
                        <p>Email: { three.email }</p>
                        <p>Phone Number: { three.phoneNumber }</p>
                        <hr/>
                        </span>
                        ))}
                    </td>
                    <td>
                    {fourVar.map((four)=>(
                        <span>
                        <p>Number of Adults: {four.numberOfAdults}</p>
                        <p>Name: { four.name }</p>
                        <p>Email: { four.email }</p>
                        <p>Phone Number: { four.phoneNumber }</p>
                        <hr/>
                        </span>
                        ))}
                    </td>
                    <td>
                    {fiveVar.map((five)=>(
                        <span>
                        
                        <p>Number of Adults: {five.numberOfAdults}</p>
                        <p>Name: { five.name }</p>
                        <p>Email: { five.email }</p>
                        <p>Phone Number: { five.phoneNumber }</p>
                        <hr/>
                        </span>
                        ))}
                    </td>
                </tr>           
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
