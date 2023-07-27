import React, { Component } from 'react';
import './Register.css'; // Import your CSS file
import axios from "axios";
import { Login } from "../auth/Login"

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{
            userName: '',
            password: '',
            role:''
        },
        errors: {},
        msg: '',
        redirect: '/login',
        isRegisteredIn: false
    };
    
  }
  componentDidMount() {}

  render() {
    return (
        this.state.isRegisteredIn?<div ><Login/></div>  : 
      <div>
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header">Register</div>
              <div className="card-body">
              <span>{this.state.msg}</span> <br />
                <h5 className="card-title">Enter the Credentials</h5>
                <div className="input-group mb-3 mt-3">
                <span className="input-group-text" >
                    @
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="userName"
                    value={this.state.user.userName}
                    onChange={this.changeHandler}
                  />
                  <span style={{ color : 'red'}}>{this.state.errors['username']}</span>
                </div>
                
                <div className="input-group mb-3 mt-3">
                <span className="input-group-text" >
                    **
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="role"
                    name="role"
                    value={this.state.user.role}
                    onChange={this.changeHandler}
                  />
                  <span style={{ color : 'red'}}>{this.state.errors['role']}</span>
                
                </div>
                
                
                <div className="input-group mb-3">
                <span className="input-group-text" >
                    **
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={this.state.user.password}
                    onChange={this.changeHandler}
                  />
                  <span style={{ color : 'red'}}>{this.state.errors['password']}</span>
                  
                  
                </div>
                
                

                <div className="input-group mb-4">
                <button className="btn btn-primary" onClick={this.register}>Register</button>
                </div>
                
              </div>
            </div>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    );
  }

  changeHandler= (event) =>{
    this.setState({
        user: {
            ...this.state.user, 
            [event.target.name] : event.target.value
        }
    });
    }


    register = ()=>{
        /* Validate User inputs */
        if(this.handleValidation()){

            /* Call the API */
            this.registerUser(this.state.user);
        }
        else{
            /* Display error messages */
            console.log('validation not passed..');

        }

    }

    handleValidation = () => {
      let username = this.state.user.userName;
      let password = this.state.user.password; 
      
      let role = this.state.user.role;
      
      let tempErrors={}
      let isValid = true;
      
      if (!username.trim()) {
        tempErrors['username'] = 'Username is required';
        isValid = false;
      }
      
     
      
      
    
      if (!password.trim()) {
        tempErrors['password'] = 'Password is required';
        isValid = false;
      } else if (password.length < 6) {
        tempErrors['password'] = 'Password should be at least 6 characters long';
        isValid = false;
      }
      
      this.setState({ 
        errors: tempErrors 
      });
      return isValid;
    };

        

    async registerUser(user){
      try {
        const response = axios.post("/api/user/sign-up", user);
        const data = (await response).data;
        console.log('API success');
        console.log(data);
        this.setState({
          msg:"Registration Successfully"
        })
      } catch (error) {
        console.error(error.response.data.msg);
        this.setState({
            msg: error.response.data.msg
        })
      }
}
    }

export default Register;