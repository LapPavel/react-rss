import React from 'react';
import Form from './Form/Form';
import Result from './Result/Result';
import { StarshipsResponse } from '../interface/interface';

export default class App extends React.Component {
  state = {
    result: null,
    isLoad: true,
  };

  returnResult = (data: StarshipsResponse): void => {
    this.setState({ result: data });
  };

  loadStatusCHange = (status: boolean): void => {
    this.setState({ isLoad: status });
  };

  render() {
    return (
      <>
        <Form
          loadStatusCHange={this.loadStatusCHange}
          returnResult={this.returnResult}
        />
        <Result result={this.state.result} isLoad={this.state.isLoad} />
      </>
    );
  }
}
