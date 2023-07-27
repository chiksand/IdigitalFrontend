import { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

export class Newspaper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newspaper: {
        newspaperName: "",
        newspaperDescription: "",
        newspaperContact: "",
      },
      errors: {},
      msg: "",
    };
  }

  render() {
    return (
      <div>
        <div className="card">
          <h5 className="card-header">Add Newspaper</h5>
          <div className="card-body">
            <h5 className="card-title">Enter Newspaper Info: </h5>
            <p className="card-text">
              <span>{this.state.msg}</span> <br />
              <label>Name: </label>
              <input
                type="text"
                name="newspaperName"
                value={this.state.newspaper.newspaperName}
                onChange={this.changeHandler}
              />
              <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
              <br />
              <br />
              <label>Description: </label>
              <input
                type="text"
                name="newspaperDescription"
                value={this.state.newspaper.newspaperDescription}
                onChange={this.changeHandler}
              />
              <span style={{ color: "red" }}>
                {this.state.errors["description"]}
              </span>
              <br />
              <br />
              <label>Phone: </label>
              <input
                type="text"
                name="newspaperContact"
                value={this.state.newspaper.newspaperContact}
                onChange={this.changeHandler}
              />
              <span style={{ color: "red" }}>{this.state.errors["phone"]}</span>
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
      newspaper: {
        ...this.state.newspaper,
        [event.target.name]: event.target.value,
      },
    });
  };

  onAdd = () => {
    /* Validate User inputs */
    if (this.handleValidation()) {
      console.log(this.state.newspaper);
      /* Call the API */
      this.postNewspaper(this.state.newspaper);
    } else {
      /* Display error messages */
      console.log("validation not passed..");
    }
  };

  handleValidation() {
    let name = this.state.newspaper.newspaperName;

    let description = this.state.newspaper.newspaperDescription;

    let phone = this.state.newspaper.newspaperContact;

    let tempErrors = {};

    let formValid = true;

    if (!name) {
      // If name is not given

      formValid = false;

      tempErrors["name"] = "Name cannot be empty";
    } else if (!/^([a-zA-Z\s]+)$/.test(name)) {
      // If name contains characters other than alphabets and spaces

      formValid = false;

      tempErrors["name"] = "Name should contain only alphabets and spaces";
    }

    if (!description) {
      //If name is not given

      formValid = false;

      tempErrors["description"] = "description cannot be empty";
    }

    if (!phone) {
      // If name is not given

      formValid = false;

      tempErrors["phone"] = "Please enter your PhoneNo";
    } else if (!/^[6-9]\d{9}$/.test(phone)) {
      formValid = false;

      tempErrors["phone"] = "Please enter a valid phone number";
    }

    this.setState({
      errors: tempErrors,
    });

    return formValid;
  }
  async postNewspaper(np) {
    let newpap = {
      newspaperName: np.newspaperName,
      newspaperDescription: np.newspaperDescription,
      newspaperContact: np.newspaperContact,
    };
    try {
      const response = axios.post("/newspapers/add", newpap);
      const data = (await response).data;
      console.log("API success");
      console.log(data);
      this.setState({
        msg: "Newspapers are added",
      });
      this.props.Newspaper(data);
    } catch (error) {
      this.setState({
        msg: "",
      });
    }
  }
}

export default Newspaper;
