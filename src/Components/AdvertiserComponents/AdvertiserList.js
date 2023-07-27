import { Component } from "react";
import axios from "axios";
export class AdvertiserList extends Component{

    constructor(props) {
  
        super(props);
  
   
  
        this.state = {
  
          advertiserList:[],
  
        };
  
      }
  
   
  
      componentDidMount() {
  
             this.getadvertiser();
  
      }
  
      render(){
  
        return(
  
            <table className="table">
  
            <thead>
  
              <tr>
  
                <th scope="col">#</th>
  
                <th scope="col">ID</th>
  
                <th scope="col">Name</th>
  
                <th scope="col">Mobile</th>
  
                <th scope="col">Email</th>

                <th scope="col">Company</th>
                <th scope="col">UserId</th>
  
               
  
              </tr>
  
            </thead>
  
            <tbody>
  
              {
  
                this.state.advertiserList.map((av, index)=>(
  
                  <tr key={av.id}>
  
                    <th scope="row" key={av.id}>{index + 1}</th>
                    <td>{av.id}</td>
                    <td>{av.name}</td>
  
                    <td>{av.mobile}</td>
  
                    <td>{av.email}</td>
  
                    <td>{av.company}</td>
                    <td>{av.user.id}</td>
  
                  </tr>
  
                ))
  
              }
  
            </tbody>
  
          </table>
  
          )
  
      }
  
      async getadvertiser(){
  
        try{
  
            const response = axios.get("/advertisers/getall");
  
            const data= (await response).data;
  
            this.setState({
  
                advertiserList:data,
  
            })
  
        }
  
        catch(error){
  
             console.error(error);
  
        }
  
    }
  
  }