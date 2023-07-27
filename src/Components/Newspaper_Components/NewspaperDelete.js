import React, { Component } from 'react';
import axios from 'axios';

class NewspaperDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newspaperId: '',
      message: '',
      error: '',
    };
  }

  handleChange = (event) => {
    this.setState({ newspaperId: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { newspaperId } = this.state;

    try {
      const response = await axios.delete(`/newspapers/delete/${newspaperId}`);
      this.setState({ message: response.data.message, error: '' });
      console.log("data deleted succesfully");
     
    } catch (error) {
      this.setState({ message: '', error: 'Failed to delete data.' });
      console.log("invalid id given")
    }
  };

  render() {
    const { newspaperId, message, error } = this.state;

    return (
      <div>
        <h1>Delete Data</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            ID:
            <input type="text" name="newspaperId" value={newspaperId} onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
        {message && <p>{message}</p>}
        {error && <p>{error}</p>}
      </div>
    );
  }
}

export default NewspaperDelete;
