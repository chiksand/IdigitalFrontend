import React, { Component } from "react";

import axios from "axios";

export class FilterAdvertisement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newspaperId: "",

      advertisementList: [],

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
      const id = this.state.newspaperId;

      const response = await axios.get(`/advertisements/api/newspaper/${id}`);

      const data = response.data;

      this.setState({
        advertisementList: data,

        errors: {},

        msg: "",
      });
    } catch (error) {
      console.error(error);

      this.setState({
        errors: { message: "Failed to fetch advertisement details." },

        msg: "",
      });
    }
  };

  render() {
    const { advertisementList, errors, msg } = this.state;

    return (
      <div>
        <h3>Get All Advertisements by Newspaper ID</h3>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Newspaper ID:</label>

            <input
              type="text"
              name="newspaperId"
              value={this.state.newspaperId}
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

              <th scope="col">Title</th>

              <th scope="col">Description</th>

              <th scope="col">Expiry Date</th>

              <th scope="col">Publication Date</th>

              <th scope="col">Price</th>

              <th scope="col">Status</th>
            </tr>
          </thead>

          <tbody>
            {advertisementList.map((advertisement, index) => (
              <tr key={advertisement.advertisementId}>
                <th scope="row">{index + 1}</th>

                <td>{advertisement.advertisementId}</td>

                <td>{advertisement.advertisementTitle}</td>

                <td>{advertisement.advertisementDescription}</td>

                <td>{advertisement.expiryDate}</td>

                <td>{advertisement.publicationDate}</td>

                <td>{advertisement.advertisementPrice}</td>

                <td>{advertisement.advertisementStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
