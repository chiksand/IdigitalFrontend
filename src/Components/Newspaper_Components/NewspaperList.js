import { Component } from "react";
import axios from "axios";
import "./NewspaperList.css";

export class NewspaperList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newspaperlist: [],
    };
  }

  componentDidMount() {
    this.getnewspaper();
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>

            <th scope="col">ID</th>

            <th scope="col">Name</th>

            <th scope="col">Description</th>

            <th scope="col">ContactNo</th>
          </tr>
        </thead>

        <tbody>
          {this.state.newspaperlist.map((np, index) => (
            <tr key={np.id}>
              <th scope="row" key={np.id}>
                {index + 1}
              </th>

              <td>{np.newspaperId}</td>

              <td>{np.newspaperName}</td>

              <td>{np.newspaperDescription}</td>

              <td>{np.newspaperContact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  async getnewspaper() {
    try {
      const response = axios.get("/newspapers/getall");

      const data = (await response).data;

      this.setState({
        newspaperlist: data,
      });
    } catch (error) {
      console.error(error);
    }
  }
}
