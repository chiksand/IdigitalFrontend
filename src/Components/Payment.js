import { Component } from "react";

import BookingDetails from "./payment-components/BookingDetails";

import { PaymentList } from "./payment-components/PaymentList";

import { Link } from "react-router-dom";

import { PaymentById } from "./payment-components/PaymentById";

export class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentNum: 0,
    };
  }
  render() {
    return (
      <div className="container-fliud">
        <div className="row">
          <div className="col-sm-9">
            <ul className="list-group">
              <li className=" list-group-item">
                {" "}
                <button
                  className="list-group-item employee-sidebar"
                  onClick={() => {
                    this.setState({ componentNum: 1 });
                  }}
                >
                  {" "}
                  make payment{" "}
                </button>{" "}
              </li>
              <li className="list-group-item">
                <button
                  className=" list-group-item employee-sidebar"
                  onClick={() => this.setState({ componentNum: 2 })}
                >
                  payment List
                </button>
              </li>
              <li className="list-group-item">
                <button
                  className=" list-group-item employee-sidebar"
                  onClick={() => this.setState({ componentNum: 3 })}
                >
                  payment datails by id
                </button>
              </li>
            </ul>
          </div>
          <div className="col-lg-9">
            {this.state.componentNum === 1 ? (
              <BookingDetails />
            ) : this.state.componentNum === 2 ? (
              <PaymentList />
            ) : (
              <PaymentById />
            )}
          </div>
          <br></br>
          <br></br>
          <div>
            <Link className="btn btn-primary" to="/booking">
              <button type="button" className="btn btn-primary">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
