import React from 'react';
import { APIservice } from '../APIservice/APIservice';
import { FormProps } from '../../interface/interface';
import './Form.css';

export default class Form extends React.Component<FormProps> {
  state = { value: localStorage.getItem('search') || '' };

  async requestData(): Promise<void> {
    const data = await APIservice.getData(this.state.value, 1);
    this.props.returnResult(data);
    this.props.loadStatusCHange(false);
  }

  componentDidMount(): void {
    this.requestData();
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    this.props.loadStatusCHange(true);
    localStorage.setItem('search', this.state.value);
    this.requestData();
  };

  render() {
    return (
      <form className="search_form" onSubmit={this.handleSubmit}>
        <label>
          Enter starship name:{' '}
          <input
            type="text"
            name="search"
            className="search_input"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input className="button search_button" type="submit" value="Search" />
      </form>
    );
  }
}
