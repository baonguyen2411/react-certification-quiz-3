import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

const useLocalStorage = (key, defaultValue = null) => {
  const [value, setValue] = useState(() => {
    const localStorageValue = getLocalStorage(key);
    const initialValue = localStorageValue
      ? JSON.parse(localStorageValue)
      : null;

    return initialValue || defaultValue;
  });

  useEffect(() => {
    setLocalStorage(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
