import { useState, createContext } from 'react';
import Form from './Form/Form';
import Result from './Result/Result';
import { StarshipResponse } from '../interface/interface';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import './App.css';

export const AppContext = createContext({
  result: null as StarshipResponse | null,
  isLoad: true,
  testError: false,
  returnResult: (data: StarshipResponse | null) => {
    data;
  },
  loadStatusChange: (status: boolean) => {
    status;
  },
  toggleTestError: () => {},
});

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
    <AppContext.Provider
      value={{
        result,
        isLoad,
        testError,
        returnResult,
        loadStatusChange,
        toggleTestError,
      }}
    >
      <header className="header">
        <button className="button" onClick={toggleTestError}>
          Do a crime!
        </button>
        <Form />
      </header>
      <main className="main">
        <Result />
      </main>
    </AppContext.Provider>
  );
}

export default () => (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
