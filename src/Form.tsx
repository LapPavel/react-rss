import React from 'react';
import { APIservice } from './APIservice';

export default class Form extends React.Component {
  state = { value: localStorage.getItem('search') || '' };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(await APIservice.getData(this.state.value, 1));
    localStorage.setItem('search', this.state.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter starship name:{''}
          <input
            type="text"
            name="search"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Search" />
      </form>
    );
  }
}
