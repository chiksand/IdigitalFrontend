import React, { Component } from "react";

import axios from "axios";

export class PaymentById extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",

      paymentList: [],

      errors: {},

      msg: "",
    };
  }

  componentDidMount() {
    this.getPayment();
  }

  render() {
    return (
      <div>
        <h3>Get Payment Details by ID</h3>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label>payment ID:</label>

            <input
              type="text"
              name="id"
              value={this.state.id}
              onChange={this.handleChange}
            />
          </div>

          <br />

          <button type="submit">Get Details</button>
        </form>

        <br />

        {this.state.paymentList.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>

                <th scope="col">Paid Date</th>

                <th scope="col">Payment</th>

                <th scope="col">Payment Id</th>
              </tr>
            </thead>

            <tbody>
              {this.state.paymentList.map((p, index) => (
                <tr key={p.id}>
                  <th scope="row" key={p.id}>
                    {index + 1}
                  </th>

                  <td>{p.date}</td>

                  <td>{p.payment}</td>

                  <td>{p.paymentId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>{this.state.msg}</p>
        )}
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.getPayment();
  };

  getPayment = async () => {
    try {
      const id = this.state.id;

      const response = await axios.get(`/payments/${id}`);

      const data = response.data;

      if (data) {
        this.setState({
          paymentList: [data],

          msg: "",
        });
      } else {
        this.setState({
          paymentList: [],
          msg: "No payment found for the given ID.",
        });
      }
    } catch (error) {
      console.error(error);
      this.setState({
        paymentList: [],
        msg: "No payment found for the given ID.",
      });
    }
  };
}
