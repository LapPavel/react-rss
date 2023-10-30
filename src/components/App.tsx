import React from 'react';
import Form from './Form/Form';
import Result from './Result/Result';
import { StarshipsResponse } from '../interface/interface';

export default class App extends React.Component {
  state = {
    result: null,
  };

  returnResult = (data: StarshipsResponse) => {
    this.setState({ result: data });
  };

  render() {
    return (
      <>
        <Form returnResult={this.returnResult} />
        <Result result={this.state.result} />
      </>
    );
  }
}
