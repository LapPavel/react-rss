import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
