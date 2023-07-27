import React, { Component } from "react";

import axios from "axios";

export class FilterByAdvertiser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      advertiserId: "",
      bookingList: [],
      errors: {},
      msg: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const id = this.state.advertiserId;

      const response = await axios.get(`/bookings/advertiser/${id}`);

      const data = response.data;

      this.setState({
        bookingList: data,

        errors: {},

        msg: "",
      });
    } catch (error) {
      console.error(error);

      this.setState({
        errors: { message: "Failed to fetch booking details." },

        msg: "",
      });
    }
  };

  render() {
    const { bookingList, errors, msg } = this.state;

    return (
      <div>
        <h3>Get All Bookings by Advertiser ID</h3>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Advertiser ID:</label>
            <input
              type="text"
              name="advertiserId"
              value={this.state.advertiserId}
              onChange={this.handleChange}
            />
          </div>

          <br />
          <button type="submit">Get Details</button>
        </form>
        <br />
        {errors.message && <p>{errors.message}</p>}
        {msg && <p>{msg}</p>}

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">BookingDate</th>
              <th scope="col">BookingStatus</th>
            </tr>
          </thead>
          <tbody>
            {bookingList.map((booking, index) => (
              <tr key={booking.bookingId}>
                <th scope="row">{index + 1}</th>
                <td>{booking.bookingId}</td>
                <td>{booking.bookingDate}</td>
                <td>{booking.bookingStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
