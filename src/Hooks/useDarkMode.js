import React, { useState, useLayoutEffect } from "react";
import useLocalStorage from './useLocalStorage';


export default function useDarkMode() {
   const [storedValue, setStoredValue] = useLocalStorage('darkmode');
  useLayoutEffect(() => {
      const darkTime = localStorage.getItem('darkmode');

      darkTime
      ? document.body.classList.add('dark-mode')
      : document.body.classList.remove('dark-mode');
  }, [storedValue]);

  return [storedValue, setStoredValue];
}