import React, { Component } from 'react';
import axios from 'axios';

class BookingDetails extends Component {
  state = {
    bookingId: '',
    bill: '',
  };

  handleInputChange = (event) => {
    this.setState({ bookingId: event.target.value });
  };

  assignPayment = () => {
    const { bookingId } = this.state;

    axios
      .get(`/bookings/assign-payment/${bookingId}`)
      .then((response) => {
        const bill = response.data;
        this.setState({ bill });
        console.log("Payment Done Successfully");
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  render() {
    const { bill } = this.state;

    return (
      <div>
        <h1>Assign Payment</h1>
        <div>
          <label htmlFor="bookingId">Booking ID:</label>
          <input
            type="text"
            id="bookingId"
            value={this.state.bookingId}
            onChange={this.handleInputChange}
          />
          <button onClick={this.assignPayment}>Make Payment</button>
        </div>
        {bill && <div>Bill: {bill}</div>}
      </div>
    );
  }
}

export default BookingDetails;
