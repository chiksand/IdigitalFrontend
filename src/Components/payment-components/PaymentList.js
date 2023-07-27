import { Component } from "react";
import axios from "axios";

export class PaymentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paymentlist: [],
    };
  }

  componentDidMount() {
    this.getpayment();
  }

  render() {
    return (
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
          {this.state.paymentlist.map((p, index) => (
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
    );
  }

  async getpayment() {
    try {
      const response = axios.get("/payments/allpayments");

      const data = (await response).data;

      this.setState({
        paymentlist: data,
      });
    } catch (error) {
      console.error(error);
    }
  }
}
