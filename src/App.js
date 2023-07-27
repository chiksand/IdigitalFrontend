//import logo from './logo.svg';
import React, { Component } from 'react';
import {BrowserRouter,Switch,Route,Routes, NavLink} from "react-router-dom"
import Login from "../src/auth/Login";
import Register from './auth/Register';
import "./App.css";
import Navbar from './Navbar';
import Home from './Home';
import Logout from './auth/Logout';
import { CompletePayment } from './Components/payment-components/CompletePayment';
import { NewspaperDashboard } from './Components/Newspaper_Components/NewspaperDashboard';

import { Booking } from './Components/Booking';
import { MainAdvertisement } from './Components/MainAdvertisement';
import { Advertiser } from './Components/Advertiser';
import { Payment } from './Components/Payment';
import Dashboard from './Components/admin-components/Dashboard';

 

class App extends Component {
  render() {
    return (
      <div className='background'>
         
       <Navbar />
       
      <Routes>
      
      <Route path="/dashboard" element = {<Dashboard/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/register" element = {<Register/>}/>
        <Route path="/" element = {<Home/>}/>
        <Route path="/logout" element = {<Logout/>}/>
        <Route path="/managenewspaper" element = {<NewspaperDashboard/>}/>
        <Route path="/manageadvertiser" element = {<Advertiser/>}/>
        <Route path="/manageadvertisements" element = {<MainAdvertisement/>}/>
        <Route path="/booking" element = {<Booking/>}/>
        <Route path="/payments" element = {<Payment/>}/>
        <Route path="/complete-payment" component={CompletePayment} />
        

        
      </Routes> 

    </div>
      
   
      
    );
    
  }
}

 

export default App;
