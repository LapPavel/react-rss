import { useState } from 'react';
import { Starship } from '../interface/interface';
import Form from './Form/Form';
import Result from './Result/Result';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import './App.css';

function App() {
  const [result, setResult] = useState<Starship[] | null>(null);
  const [isLoad, setLoadStatus] = useState(true);
  const [testError, setTestError] = useState(false);
  const [cardQty, setCardQty] = useState(10);

  function toggleTestError(): void {
    setTestError(!testError);
  }

  if (testError) {
    throw new Error('Test error');
  }

  return (
    <>
      <header className="header">
        <button className="header_button" onClick={toggleTestError}>
          Do a crime!
        </button>
        <Form
          cardQty={cardQty}
          setCardQty={setCardQty}
          setLoadStatus={setLoadStatus}
          setResult={setResult}
        />
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
