import React from 'react';
import Form from './Form/Form';
import Result from './Result/Result';
import { StarshipsResponse } from '../interface/interface';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import './App.css';

class App extends React.Component {
  state = {
    result: null,
    isLoad: true,
    testError: false,
  };

  returnResult = (data: StarshipsResponse | null): void => {
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
        <header className="header">
          <button className="button" onClick={this.toggleTestError}>
            Do a crime!
          </button>
          <Form
            loadStatusCHange={this.loadStatusCHange}
            returnResult={this.returnResult}
          />
        </header>
        <main className="main">
          <Result
            result={this.state.result}
            isLoad={this.state.isLoad}
            toggleTestError={this.toggleTestError}
          />
        </main>
      </>
    );
  }
}

export default () => (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
