import React, { Component } from "react";
import axios from "axios";

export class Advertisement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      advertisement: {
        advertisementTitle: "",
        advertisementDescription: "",
        publicationDate: "",
        expiryDate: "",
        advertisementPrice: "",
        advertisementStatus: "",
        advertiserId: "",
        newspaperId: "",
      },
      errors: {},
      msg: "",
      newspapers: [],
      advertisers: [],
    };
  }

  componentDidMount() {
    this.fetchNewspapers();
    this.fetchAdvertisers();
  }

  fetchNewspapers() {
    axios
      .get("/newspapers/getall")
      .then((response) => {
        this.setState({ newspapers: response.data });
      })
      .catch((error) => {
        console.error("Error fetching newspapers:", error);
      });
  }

  fetchAdvertisers() {
    axios
      .get("/advertisers/getall")
      .then((response) => {
        this.setState({ advertisers: response.data });
      })
      .catch((error) => {
        console.error("Error fetching advertisers:", error);
      });
  }

  render() {
    const {
      advertisement,
      errors,
      msg,
      newspapers,
      advertisers,
    } = this.state;
    const currentDate = new Date().toISOString().split("T")[0];

    return (
      <div>
        <div className="card">
          <h5 className="card-header">Add Advertisement</h5>

          <div className="card-body">
            <h5 className="card-title">Enter Advertisement Info:</h5>

            <p className="card-text">
              <span>{msg}</span>
              <br />
              <label>Title:</label>
              <input
                type="text"
                name="advertisementTitle"
                value={advertisement.advertisementTitle}
                onChange={this.changeHandler}
              />
              <span style={{ color: "red" }}>
                {errors["advertisementTitle"]}
              </span>
              <br />
              <br />
              <label>Description:</label>
              <input
                type="text"
                name="advertisementDescription"
                value={advertisement.advertisementDescription}
                onChange={this.changeHandler}
              />
              <span style={{ color: "red" }}>
                {errors["advertisementDescription"]}
              </span>
              <br />
              <br />
              
              <label>Publication Date:</label>
              <input
                type="date"
                name="publicationDate"
                value={advertisement.publicationDate}
                min={currentDate}
                onChange={this.changeHandler}
              />
              <span style={{ color: "red" }}>
                {errors["publicationDate"]}
              </span>
              <br />
              <br />
              <label>Expiry Date:</label>
              <input
                type="date"
                name="expiryDate"
                value={advertisement.expiryDate}
                min={currentDate}
                onChange={this.changeHandler}
              />
              <span style={{ color: "red" }}>{errors["expiryDate"]}</span>
              <br />
              <br />
              <label>Price:</label>
              <input
                type="text"
                name="advertisementPrice"
                value={advertisement.advertisementPrice}
                onChange={this.changeHandler}
              />
              <span style={{ color: "red" }}>
                {errors["advertisementPrice"]}
              </span>
              <br />
              <br />
              <label>Status:</label>
              <input
                type="text"
                name="advertisementStatus"
                value={advertisement.advertisementStatus}
                onChange={this.changeHandler}
              />
              <span style={{ color: "red" }}>
                {errors["advertisementStatus"]}
              </span>
              <br />
              <br />
              <label>Advertiser:</label>
              <select
                name="advertiserId"
                value={advertisement.advertiserId}
                onChange={this.changeHandler}
              >
                <option value="">Select an advertiser</option>
                {advertisers.map((advertiser) => (
                  <option key={advertiser.id} value={advertiser.id}>
                    {advertiser.name}
                  </option>
                ))}
              </select>
              <span style={{ color: "red" }}>{errors["advertiserId"]}</span>
              <br />
              <br />
              <label>Newspaper:</label>
              <select
                name="newspaperId"
                value={advertisement.newspaperId}
                onChange={this.changeHandler}
              >
                <option value="">Select a newspaper</option>
                {newspapers.map((newspaper) => (
                  <option key={newspaper.newspaperId} value={newspaper.newspaperId}>
                    {newspaper.newspaperName}
                  </option>
                ))}
              </select>
              <span style={{ color: "red" }}>{errors["newspaperId"]}</span>
              <br />
              <br />
              <button onClick={this.onAdd} className="btn btn-primary">
                Add
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }

  changeHandler = (event) => {
    this.setState({
      advertisement: {
        ...this.state.advertisement,
        [event.target.name]: event.target.value,
      },
    });
  };

  

  handleValidation() {
    const {
      advertisementTitle,
      advertisementDescription,
     
      publicationDate,
      expiryDate,
      advertisementPrice,
      advertisementStatus,
      advertiserId,
      newspaperId,
    } = this.state.advertisement;

    const errors = {};

    let formValid = true;

    if (!advertisementTitle) {
      formValid = false;
      errors["advertisementTitle"] = "Title cannot be empty";
    }

    if (!advertisementDescription) {
      formValid = false;
      errors["advertisementDescription"] = "Description cannot be empty";
    }

    if (!publicationDate) {
      formValid = false;
      errors["publicationDate"] = "Please select a publication date";
    }

    if (!expiryDate) {
      formValid = false;
      errors["expiryDate"] = "Please select an expiry date";
    }

    if (!advertisementPrice) {
      formValid = false;
      errors["advertisementPrice"] = "Please enter the advertisement price";
    } else if (!/^\d+$/.test(advertisementPrice)) {
      formValid = false;
      errors["advertisementPrice"] =
        "Advertisement price should only contain digits";
    }

    if (!advertisementStatus) {
      formValid = false;
      errors["advertisementStatus"] = "Please enter the advertisement status";
    }

    if (!advertiserId) {
      formValid = false;
      errors["advertiserId"] = "Please select an advertiser";
    }

    if (!newspaperId) {
      formValid = false;
      errors["newspaperId"] = "Please select a newspaper";
    }

    this.setState({ errors });

    return formValid;
  }

  onAdd = () => {
    // Validate User inputs
    if (this.handleValidation()) {
      // Call the API
      const { advertiserId, newspaperId } = this.state.advertisement;
      this.postAdvertisementForNewspaper(advertiserId, newspaperId);
    } else {
      // Display error messages
      console.log("Validation not passed.");
    }
  };

  postAdvertisementForNewspaper = (advertiserId, newspaperId) => {
    const { advertisement } = this.state;

    const newAdvertisement = {
      ...advertisement,
      advertiserId,
      newspaperId,
    };

    axios
      .post(`/advertisements/advertiser/${advertiserId}/newspaper/${newspaperId}`, newAdvertisement)
      .then((response) => {
        const addedAdvertisement = response.data;
        console.log("API success");
        console.log(addedAdvertisement);
        this.setState({
          msg: "Advertisement is added successfully",
        });
        // Do something with the added advertisement data if needed
      })
      .catch((error) => {
        console.error("API error:", error);
        this.setState({
          msg: "",
        });
      });
  };
}

export default Advertisement;
