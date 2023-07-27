import axios from "axios";

import { Component } from "react";

export class AddBooking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      booking: {
        bookingDate: "",

        bookingStatus: "",

        advertisementId: "",
      },

      errors: {},

      msg: "",

      advertisements: [],
    };
  }

  componentDidMount() {
    this.fetchAdvertisements();
  }

  fetchAdvertisements = async () => {
    try {
      const response = await axios.get("/advertisements");

      const data = response.data;

      this.setState({
        advertisements: data,
      });
    } catch (error) {
      console.log("Error fetching advertisements:", error);
    }
  };

  render() {
    const currentDate = new Date().toISOString().split("T")[0];

    return (
      <div>
        <div className="card">
          <h5 className="card-header">Add Booking</h5>

          <div className="card-body">
            <h5 className="card-title">Enter Booking Info: </h5>

            <p className="card-text">
              <span>{this.state.msg}</span> <br />
              <label>Booking date: </label>
              <input
                type="date"
                name="bookingDate"
                value={this.state.booking.bookingDate}
                min={currentDate}
                onChange={this.changeHandler}
              />
              <span style={{ color: "red" }}>
                {this.state.errors["bookingDate"]}
              </span>
              <br />
              <br />
              <label>Booking status: </label>
              <input
                type="text"
                name="bookingStatus"
                value={this.state.booking.bookingStatus}
                onChange={this.changeHandler}
              />
              <span style={{ color: "red" }}>
                {this.state.errors["bookingStatus"]}
              </span>
              <br />
              <br />
              <label>Select Advertisement: </label>
              <select
                name="advertisementId"
                value={this.state.booking.advertisementId}
                onChange={this.changeHandler}
              >
                <option key={0} value="">
                  --Select Advertisement--
                </option>

                {this.state.advertisements.map((d) => (
                  <option key={d.advertisementId} value={d.advertisementId}>
                    {d.advertisementTitle}
                  </option>
                ))}
              </select>
              <span style={{ color: "red" }}>
                {this.state.errors["advertisementId"]}
              </span>
              <br />
              <br />
              <button onClick={this.onAdd} className="btn btn-primary">
                Book
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }

  changeHandler = (event) => {
    this.setState({
      booking: {
        ...this.state.booking,

        [event.target.name]: event.target.value,
      },
    });
  };

  onAdd = () => {
    /* Validate User inputs */

    if (this.handleValidation()) {
      console.log(this.state.booking);

      /* Call the API */

      this.postBooking(this.state.booking);
    } else {
      /* Display error messages */

      console.log("Validation not passed..");
    }
  };

  handleValidation() {
    let bookingDate = this.state.booking.bookingDate;

    let bookingStatus = this.state.booking.bookingStatus;

    let advertisementId = this.state.booking.advertisementId;

    let tempErrors = {};

    let formValid = true;

    if (!bookingDate) {
      // If name is not given

      formValid = false;

      tempErrors["bookingDate"] = "date should be from current date";
    }

    if (!bookingStatus) {
      formValid = false;

      tempErrors["bookingStatus"] = "Status is required";
    } else if (!/^[a-zA-Z]+$/.test(bookingStatus)) {
      formValid = false;

      tempErrors["bookingStatus"] = "Status should contain only alphabets";
    }

    if (!advertisementId) {
      // If name is not given

      formValid = false;

      tempErrors["advertisementId"] = "Please select advertisement ID";
    }

    this.setState({
      errors: tempErrors,
    });

    return formValid;
  }

  async postBooking(e) {
    let book = {
      bookingDate: e.bookingDate,

      bookingStatus: e.bookingStatus,
    };

    try {
      const response = await axios.post(
        "/bookings/booking/" + e.advertisementId,

        book
      );

      const data = response.data;

      console.log("API success");

      console.log("Booking added succesfully");

      console.log(data);

      this.setState({
        msg: "Booking request done",
      });
    } catch (error) {
      this.setState({
        msg: "",
      });
    }
  }
}

export default AddBooking;
