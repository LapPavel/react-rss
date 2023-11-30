import React, { useEffect } from 'react';
import { APIservice } from '../APIservice/APIservice';
import { FormProps } from '../../interface/interface';
import './Form.css';

export default function Form({ loadStatusChange, returnResult }: FormProps) {
  const [searchText, setSearchText] = React.useState(
    localStorage.getItem('search') || ''
  );
  const cardQty = React.useRef(10);

  async function requestData(): Promise<void> {
    const data = await APIservice.getData(searchText, cardQty.current, 1);
    returnResult(data);
    loadStatusChange(false);
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
      cardQty.current = +event.target.value;
      handleSubmit(event as React.FormEvent);
    }
  }

  async function handleSubmit(event: React.FormEvent): Promise<void> {
    event.preventDefault();
    loadStatusChange(true);
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
      <input className="button search_button" type="submit" value="Search" />
      <select
        name="qty"
        className="search_qty"
        value={cardQty.current}
        onChange={handleChange}
      >
        <option>10</option>
        <option>20</option>
        <option>30</option>
      </select>
    </form>
  );
}
