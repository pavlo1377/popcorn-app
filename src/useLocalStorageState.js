import { useState, useEffect } from "react";

export function useLocalStorageState(initialValue, localStoragekey) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem("watched");
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(
    function () {
      localStorage.setItem(localStoragekey, JSON.stringify(value));
    },
    [value, localStoragekey]
  );

  return [value, setValue];
}
