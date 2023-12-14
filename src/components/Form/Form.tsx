import React, { useEffect } from 'react';
import { APIservice } from '../APIservice/APIservice';
import { FormProps } from '../../interface/interface';
import './Form.css';

export default function Form({
  cardQty,
  setCardQty,
  setLoadStatus,
  setResult,
}: FormProps) {
  const [searchText, setSearchText] = React.useState(
    localStorage.getItem('search') || ''
  );
  //const cardQty = React.useRef(10);

  async function requestData(): Promise<void> {
    const data = await APIservice.getData(searchText);
    setResult(data);
    setLoadStatus(false);
  }

  useEffect(() => {
    requestData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void {
    if (event.target.tagName === 'INPUT') {
      setSearchText(event.target.value);
    } else {
      setCardQty(+event.target.value);
      handleSubmit(event as React.FormEvent);
    }
  }

  async function handleSubmit(event: React.FormEvent): Promise<void> {
    event.preventDefault();
    setLoadStatus(true);
    localStorage.setItem('search', searchText);
    await requestData();
  }

  return (
    <form className="search_form" onSubmit={handleSubmit}>
      <label>
        Enter starship name:{' '}
        <input
          type="text"
          name="search"
          className="search_input"
          value={searchText}
          onChange={handleChange}
        />
      </label>
      <input
        className="header_button search_button"
        type="submit"
        value="Search"
      />
      <select
        name="qty"
        className="search_qty"
        value={cardQty}
        onChange={handleChange}
      >
        <option>10</option>
        <option>20</option>
        <option>30</option>
      </select>
    </form>
  );
}
