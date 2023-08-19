import { useState } from 'react';

/**
 * Custom hook that provides multi-state management for a given object.
 *
 * @template T - The type of the initial state object.
 * @param {T} initialState - The initial state object.
 * @returns {{
 *   state: T,
 *   resetState: (value?: any) => void,
 *   setState: (value: any, key?: keyof T) => void,
 *   watchers: any[]
 * }} An object containing state, resetState, setState, and watchers properties.
 */
export const useMultiState = <T extends object>(initialState: T) => {
  // Use the useState hook to manage the state
  const [state, setState] = useState<T>(initialState);

  /**
   * Function to set multiple state values at once.
   *
   * @param {any} value - The value to be set or merged into the state.
   * @param {keyof T} key - Optional key specifying a specific property to update in the state.
   */
  const setState = (value: any, key?: keyof T) => {
    if (key) {
      setState((prev: T) => ({ ...prev, [key]: value }));
    } else {
      setState((prev: T) => ({ ...prev, ...value }));
    }
  };

  /**
   * Function to reset the state to its initial value or a provided value.
   *
   * @param {any} value - Optional value to set the state to (default: initialState).
   */
  const resetState = (value?: any) => {
    if (value) {
      setState(value);
    } else {
      setState(initialState);
    }
  };

  // Create an array containing all values inside the object if T is an object, otherwise, just include T in the array
  const watchers: any[] = Array.isArray(state) ? [state] : Object.values(state);

  return {
    state,
    resetState,
    setState,
    watchers,
  };
};
