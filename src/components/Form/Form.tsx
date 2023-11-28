import React, { useEffect } from 'react';
import { APIservice } from '../APIservice/APIservice';
import { FormProps } from '../../interface/interface';
import './Form.css';

export default function Form({ loadStatusChange, returnResult }: FormProps) {
  const [value, setValue] = React.useState(
    localStorage.getItem('search') || ''
  );

  async function requestData(): Promise<void> {
    const data = await APIservice.getData(value, 1);
    returnResult(data);
    loadStatusChange(false);
  }

  useEffect(() => {
    requestData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setValue(event.target.value);
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    loadStatusChange(true);
    localStorage.setItem('search', value);
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
          value={value}
          onChange={handleChange}
        />
      </label>
      <input className="button search_button" type="submit" value="Search" />
    </form>
  );
}
