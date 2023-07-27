import { Component } from "react";
import { AdvertiserList } from "./AdvertiserComponents/AdvertiserList";
import { GetAdvertisementsByAdvertiserId } from "./AdvertiserComponents/GetAdvertisementsByAdvertiserId";
import { Link } from "react-router-dom";
export class Advertiser extends Component{

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

                  }} > Show all advertisers </button> </li>

                  <li className="list-group-item">

                    <button  className=" list-group-item employee-sidebar"

                    onClick={()=>(this.setState({componentNum : 2}))}>

                       Advertisements By Advertiser</button></li>
                </ul>

                </div>

              <div className="col-lg-9">

                  {this.state.componentNum === 1?

                      <AdvertiserList />:

                      <GetAdvertisementsByAdvertiserId />}

              </div>
              <br></br><br></br>
              <div >

           <Link className="btn btn-primary" to="/managenewspaper">

           <button type="button" className="btn btn-primary">Back</button>

           </Link>

    </div>
    <br></br><br></br>
              <div >

           <Link className="btn btn-primary" to="/manageadvertisements">

           <button type="button" className="btn btn-primary">Advetisements Info</button>

           </Link>

    </div>

            </div>

          </div>

         

        );

      }

}

