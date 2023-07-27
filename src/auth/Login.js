import React, { Component } from "react";
import "./Login.css";
import axios from "axios";
import Dashboard from "../Components/admin-components/Dashboard";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userName: "",
        password: "",
        //email: '',
      },
      errors: {},
      msg: "",
      redirect: "/dashboard",
      isLoggedIn: false,
    };
  }

  componentDidMount() {}

  render() {
    return this.state.isLoggedIn ? (
      <div>
        <Dashboard />
      </div>
    ) : (
      <div>
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header">Login</div>
              <div className="card-body">
                <span>{this.state.msg}</span> <br />
                <h5 className="card-title">Enter the Credentials</h5>
                <div className="input-group mb-3">
                  <span className="input-group-text">**</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                    name="userName"
                    value={this.state.user.userName}
                    onChange={this.changeHandler}
                  />
                  <span style={{ color: "red" }}>
                    {this.state.errors["username"]}
                  </span>
                  <div className="input-group mb-3">
                    <span className="input-group-text">**</span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    name="password"
                    value={this.state.user.password}
                    onChange={this.changeHandler}
                  />
                  <span style={{ color: "red" }}>
                    {this.state.errors["password"]}
                  </span>
                </div>
                <div className="input-group mb-4">
                  <button className="btn btn-primary" onClick={this.login}>
                    Login
                  </button>
                </div>
                <div className="register-link">
                  Don't have an account? <a href="/register">Register</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    );
  }

  changeHandler = (event) => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  login = () => {
    /* Validate User inputs */
    if (this.handleValidation()) {
      /* Call the API */
      this.loginUser(this.state.user);
    } else {
      /* Display error messages */
      console.log("validation not passed..");
    }
  };

  handleValidation() {
    let userName = this.state.user.userName;
    let password = this.state.user.password;
    //let email = this.state.user.email;

    let tempErrors = {};
    let formValid = true;
    if (!userName) {
      //If name is not given
      formValid = false;
      tempErrors["username"] = "Username cannot be empty";
    }
    if (!password.trim()) {
      tempErrors["password"] = "Password is required";
      formValid = false;
    } else if (password.length < 6) {
      tempErrors["password"] = "Password should be at least 6 characters long";
      formValid = false;
    }
    // if (!email.trim()) {
    //   tempErrors['email'] = 'Email is required';
    //   formValid = false;
    // } else if (!/\S+@\S+\.\S+/.test(email)) {
    //   tempErrors['email'] = 'Invalid email address';
    //   formValid = false;
    // }

    this.setState({
      errors: tempErrors,
    });

    return formValid;
  }

  async loginUser(user) {
    let authCode = "Basic " + btoa(user.userName + ":" + user.password);
    try {
      const response = axios.get("/api/user/login", {
        headers: { Authorization: authCode },
      });
      const data = (await response).data;

      console.log("login success " + data);
      this.setState({
        isLoggedIn: true,
      });
    } catch (error) {
      // console.error(error);
      this.setState({
        msg: "Invalid Credentials",
      });
    }
  }
}
export default Login;
