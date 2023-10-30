import React from 'react';
import { APIservice } from '../APIservice/APIservice';
import { FormProps } from '../../interface/interface';

export default class Form extends React.Component<FormProps> {
  state = { value: localStorage.getItem('search') || '' };

  async componentDidMount() {
    const data = await APIservice.getData(this.state.value, 1);
    this.props.returnResult(data);
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = await APIservice.getData(this.state.value, 1);
    localStorage.setItem('search', this.state.value);
    this.props.returnResult(data);
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
