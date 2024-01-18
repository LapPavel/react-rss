import { ResultProps } from '../../interface/interface';
import './Result.css';

export default function Result({
  result,
  isLoad,
  toggleTestError,
}: ResultProps) {
  if (isLoad) {
    return (
      <div className="load-wave">
        <div className="wave">
          <div className="wave_item"></div>
          <div className="wave_item"></div>
          <div className="wave_item"></div>
          <div className="wave_item"></div>
          <div className="wave_item"></div>
        </div>
      </div>
    );
  }
  if (result) {
    if (result.length === 0) {
      return <p>No results found</p>;
    }
    // const pages = Math.ceil(result.length / 10);
    // for (let i = 0; i < pages; i++) {}
    return (
      <div>
        <ul className="search_results">
          {result.map((item, id) => (
            <li className="search_result" key={id}>
              <h3 className="result_name">{item.name}</h3>
              <p className="result_description">model: {item.model}</p>
              <p className="result_description">class: {item.starship_class}</p>
              <p className="result_description">length: {item.length}</p>
              <p className="result_description">
                atmosphering speed: {item.max_atmosphering_speed}
              </p>
              <p className="result_description">crew: {item.crew}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    toggleTestError();
  }
}
