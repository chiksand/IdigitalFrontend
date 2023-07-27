import { Component } from "react";

import axios from "axios";

export class BookingList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookinglist: [],
    };
  }

  componentDidMount() {
    this.getbooking();
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>

            <th scope="col">ID</th>

            <th scope="col">BookingDate</th>

            <th scope="col">BokkingStatus</th>
          </tr>
        </thead>

        <tbody>
          {this.state.bookinglist.map((bk, index) => (
            <tr key={bk.id}>
              <th scope="row" key={bk.id}>
                {index + 1}
              </th>

              <td>{bk.bookingId}</td>

              <td>{bk.bookingDate}</td>

              <td>{bk.bookingStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  async getbooking() {
    try {
      const response = axios.get("/bookings/getall");

      const data = (await response).data;

      this.setState({
        bookinglist: data,
      });
    } catch (error) {
      console.error(error);
    }
  }
}
