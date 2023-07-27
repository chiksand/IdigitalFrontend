import { Component } from "react";
import AddBooking from "./Booking-components/AddBooking";
import { BookingList } from "./Booking-components/BookingList";
import { FilterByAdvertiser } from "./Booking-components/FilterByAdvertiser"; // Import the FilterByAdvertiser component
import { Link } from "react-router-dom";

export class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentNum: 0,
    };
  }

  renderComponent = () => {
    const { componentNum } = this.state;

    switch (componentNum) {
      case 1:
        return <BookingList />;
      case 2:
        return <AddBooking />;
      case 3:
        return <FilterByAdvertiser />; // Render the FilterByAdvertiser component
      default:
        return null;
    }
  };

  render() {
    return (
      <div className="container-fliud">
        <div className="row">
          <div className="col-sm-9">
            <ul className="list-group">
              <li className="list-group-item">
                <button
                  className="list-group-item employee-sidebar"
                  onClick={() => {
                    this.setState({ componentNum: 1 });
                  }}
                >
                  Show all Bookings
                </button>
              </li>
              <li className="list-group-item">
                <button
                  className="list-group-item employee-sidebar"
                  onClick={() => this.setState({ componentNum: 2 })}
                >
                  Booking Request
                </button>
              </li>
              <li className="list-group-item">
                <button
                  className="list-group-item employee-sidebar"
                  onClick={() => this.setState({ componentNum: 3 })}
                >
                  Filter by Advertiser ID
                </button>
              </li>
            </ul>
          </div>
          <div className="col-lg-9">{this.renderComponent()}</div>
          <div>
            <Link className="btn btn-primary" to="/manageadvertisements">
              <button type="button" className="btn btn-primary">
                Back
              </button>
            </Link>
          </div>
          <br />
          <br />
          <div>
            <Link className="btn btn-primary" to="/payments">
              <button type="button" className="btn btn-primary">
                Make Payment
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
