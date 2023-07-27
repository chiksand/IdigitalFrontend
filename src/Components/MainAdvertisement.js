import { Component } from "react";

import Advertisement from "./advertisements-components/Advertisement";

import { AdvertisementList } from "./advertisements-components/AdvertisementList";

import { Link } from "react-router-dom";


import { FilterAdvertisement } from "../Components/advertisements-components/FilterAdvertisement";
export class MainAdvertisement extends Component{

    constructor(props) {

        super(props);

   

        this.state = {

          componentNum: 0

        };

      }

      render() {

        return (

          <div className="container-fliud">

            <div className="row">

              <div className="col-sm-9">

                <ul className="list-group">

                  <li className=" list-group-item"> <button   className="list-group-item employee-sidebar" onClick={()=>{

                    this.setState({componentNum : 1})

                  }} > Show all Advertisements </button> </li>

                  <li className="list-group-item">

                    <button  className=" list-group-item employee-sidebar"

                    onClick={()=>(this.setState({componentNum : 2}))}>

                       Add your Advertisement</button></li>

                       <li className="list-group-item">

                    <button  className=" list-group-item employee-sidebar"

                    onClick={()=>(this.setState({componentNum : 3}))}>

                       ByNewspaperId</button></li>
                </ul>

                </div>

              <div className="col-lg-9">

                  {this.state.componentNum === 1?

                      <AdvertisementList />:this.state.componentNum === 2?

                      <Advertisement />:<FilterAdvertisement/>}

              </div>
              <br></br><br></br>
              <div >

           <Link className="btn btn-primary" to="/manageadvertiser">

           <button type="button" className="btn btn-primary">Back</button>

           </Link>

    </div>
    <br></br><br></br>
    <div >

           <Link className="btn btn-primary" to="/booking">

           <button type="button" className="btn btn-primary">Booking request</button>

           </Link>

    </div>



            </div>

          </div>

         

        );

      }

}

