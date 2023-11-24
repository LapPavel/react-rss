import React from 'react';

export default class ErrorBoundary extends React.Component<React.PropsWithChildren> {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  reloadPage = () => {
    localStorage.clear();
    location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <button className="button" onClick={this.reloadPage}>
            Reload page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
