import { useState } from 'react';
import Form from './Form/Form';
import Result from './Result/Result';
import { StarshipResponse } from '../interface/interface';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import './App.css';

function App() {
  const [result, setResult] = useState<StarshipResponse | null>(null);
  const [isLoad, setIsLoad] = useState(true);
  const [testError, setTestError] = useState(false);

  function returnResult(data: StarshipResponse | null): void {
    setResult(data);
  }

  function loadStatusChange(status: boolean): void {
    setIsLoad(status);
  }

  function toggleTestError(): void {
    setTestError(!testError);
  }

  if (testError) {
    throw new Error('Test error');
  }

  return (
    <>
      <header className="header">
        <button className="button" onClick={toggleTestError}>
          Do a crime!
        </button>
        <Form loadStatusChange={loadStatusChange} returnResult={returnResult} />
      </header>
      <main className="main">
        <Result
          result={result}
          isLoad={isLoad}
          toggleTestError={toggleTestError}
        />
      </main>
    </>
  );
}

export default () => (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
