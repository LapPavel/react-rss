import React from 'react';
import Form from './Form/Form';
import Result from './Result/Result';
import { StarshipsResponse } from '../interface/interface';

export default class App extends React.Component {
  state = {
    result: null,
    isLoad: true,
    testError: false,
  };

  returnResult = (data: StarshipsResponse): void => {
    this.setState({ result: data });
  };

  loadStatusCHange = (status: boolean): void => {
    this.setState({ isLoad: status });
  };

  toggleTestError = (): void => {
    this.setState({ testError: !this.state.testError });
  };

  render() {
    if (this.state.testError) {
      throw new Error('Test error');
    }
    return (
      <>
        <button onClick={this.toggleTestError}>Do crime!</button>
        <Form
          loadStatusCHange={this.loadStatusCHange}
          returnResult={this.returnResult}
        />
        <Result result={this.state.result} isLoad={this.state.isLoad} />
      </>
    );
  }
}
