import { Component } from "react";
import { NewspaperList } from "../Newspaper_Components/NewspaperList";
import {Newspaper} from "../Newspaper_Components/Newspaper"
import NewspaperDelete from "./NewspaperDelete";
import { Link } from "react-router-dom";
export  class NewspaperDashboard extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        componentNum: 0
      };
    }
   
    // componentDidMount(){
    //   this.props.NewspaperList();
    // }
    render() { 
      return (
        <div className="container-fliud">
          <div className="row">
            <div className="col-sm-3">
              <ul className="list-group">
                <li className=" list-group-item"> <button   className="list-group-item newspaper-sidebar" onClick={()=>{
                  this.setState({componentNum : 1})
                }} > Show all Newspapers</button> </li>
                <li className="list-group-item">
                 
                  <button  className=" list-group-item newspaper-sidebar" 
                  onClick={()=>(this.setState({componentNum : 2}))}>
                     Add Newspaper</button></li>
                     <li className="list-group-item">
                <button  className=" list-group-item newspaper-sidebar" 
                onClick={()=>(this.setState({componentNum : 3}))}>
                  Delete Newspaper</button></li>
                
              </ul>
            </div>
            <div className="col-lg-9">
                {this.state.componentNum === 1?
                    <NewspaperList />:this.state.componentNum === 2?
                    <Newspaper/>:<NewspaperDelete />}
            </div> 
            <br></br><br></br>
            <div >

           <Link className="btn btn-primary" to="/manageadvertiser">

           <button type="button" className="btn btn-primary">Advetiser Info</button>

           </Link>

    </div>
          </div>
        </div>
      );
    }
  };
 
  