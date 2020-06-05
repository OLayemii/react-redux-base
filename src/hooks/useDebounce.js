import { useEffect, useCallback } from "react";

let debounceTimeout;
/**
 * This is a custom hook for debouncing events
 *
 * ------ HOW TO USE -------
 *
 *
 * Import useDebounce to your component.
 *
 * Destruct the debouncer const [debouncer] = useDebounce(1000)
 *
 * 1000 is the debounce delay
 *
 * Debounce delay is OPTIONAL, defaults to 1000
 *
 * To debounce any method, send the method as a parameter to your debouncer e.g. debouncer(() => console.log(1+1))
 *
 * The result will be logged after 1000ms
 *
 * Using in a search input box
 *
 *
 * MOTIVATION This was made to delay server calls when making searches,
 * instead of making a request on every keystroke, we debounce to a delayed time after the last keystroke.
 *
 * @param {number} delay - Delay in milliseconds
 */
const useDebounce = (delay = 1000) => {
  const debounceRequest = useCallback(
    debounceFunction => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        debounceFunction();
      }, delay);
    },
    [delay]
  );

  useEffect(() => {
    return () => clearTimeout(debounceTimeout);
  }, [debounceRequest]);

  return [debounceRequest];
};

export default useDebounce;
