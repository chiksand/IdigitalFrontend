import { Component } from "react";

import axios from "axios";

 import './AdvertisementList.css';

export class AdvertisementList extends Component{

    constructor(props) {

        super(props);

   

        this.state = {

           adlist:[],

        };

      }

   

      componentDidMount() {

             this.getadvertisement();

      }

      render(){

        return(

            <table className="table">

            <thead>

              <tr>

                <th scope="col">#</th>

                <th scope="col">ID</th>

                <th scope="col">Title</th>

                <th scope="col">Description</th>

                <th scope="col">ExpiryDate</th>

                <th scope="col">PublicationDate</th>

                <th scope="col">price</th>

                <th scope="col">status</th>

               

              </tr>

            </thead>

            <tbody>

              {

                this.state.adlist.map((ad, index)=>(

                  <tr key={ad.id}>

                    <th scope="row" key={ad.id}>{index + 1}</th>

                    <td>{ad.advertisementId}</td>

                    <td>{ad.advertisementTitle}</td>

                    <td>{ad.advertisementDescription}</td>

                    <td>{ad.expiryDate}</td>

                    <td>{ad.publicationDate}</td>

                    <td>{ad.advertisementPrice}</td>

                    <td>{ad.advertisementStatus}</td>

                  </tr>

                ))

              }

            </tbody>

          </table>

          )

      }

      async getadvertisement(){

        try{

            const response = axios.get("/advertisements");

            const data= (await response).data;

            this.setState({

                adlist:data,

            })

        }

        catch(error){

            console.error(error);

        }

    }

}