import { Component } from "react"
import Login from "../auth/Login";
import Home from "../Home";

export default class  Logout extends Component{

    constructor(props){
        super(props);

        this.state={
               
        }
    }

    componentDidMount(){
        localStorage.clear();
    }

    render(){
        return(
            <Home />
        )
    }
}