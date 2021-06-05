import {useState} from 'react';

// eslint-disable-next-line require-jsdoc
export function useLocalStorage(key, initialValue) {
  // Set the initial state with the localStorage value
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  // To save data in local storage so they persist on page refresh.
  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    } catch (e) {
      console.error(e);
    }
  };

  return [storedValue, setLocalStorage];
};
