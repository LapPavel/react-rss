import React from 'react';
import { ResultProps } from '../../interface/interface';

export default class Result extends React.Component<ResultProps> {
  render() {
    const data = this.props.result?.results;
    if (data) {
      return (
        <div className="results">
          {data.map((item, id) => (
            <div className="result" key={id}>
              <h3>{item.name}</h3>
              <p>{item.model}</p>
            </div>
          ))}
        </div>
      );
    }
    return <div>Data loading...</div>;
  }
}
