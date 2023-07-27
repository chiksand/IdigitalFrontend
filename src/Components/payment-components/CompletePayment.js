import React, { Component } from "react";
import axios from "axios";

export class CompletePayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentId: "",
      paymentAmount: "",
      message: "",
      error: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { paymentId, paymentAmount } = this.state;

    try {
      const response = await axios.post("/payments/complete", {
        paymentId,
        payment: parseFloat(paymentAmount),
      });

      const message = response.data;
      this.setState({
        message,
        error: "",
      });
    } catch (error) {
      const errorMessage =
        error.response?.data || "Failed to complete payment.";
      this.setState({
        error: errorMessage,
        message: "",
      });
    }
  };

  render() {
    const { paymentId, paymentAmount, message, error } = this.state;

    return (
      <div>
        <h3>Complete Payment</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Payment ID:</label>
            <input
              type="text"
              name="paymentId"
              value={paymentId}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Payment Amount:</label>
            <input
              type="text"
              name="paymentAmount"
              value={paymentAmount}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Complete Payment</button>
        </form>
        {message && <p>{message}</p>}
        {error && <p>{error}</p>}
      </div>
    );
  }
}
