import { useState } from "react";

/**
 * Custom hook that provides multi-state management for a given object.
 *
 * @template T - The type of the initial state object.
 * @param {T} initialState - The initial state object.
 * @returns {{
 *   multiState: T,
 *   resetState: (value?: any) => void,
 *   setMultiState: (value: any, key?: keyof T) => void
 * }} An object containing multiState, resetState, and setMultiState functions.
 */
export const useMultiState = <T extends object>(initialState: T) => {
  const [state, setState] = useState<T>(initialState);

  /**
   * Function to set multiple state values at once.
   *
   * @param {any} value - The value to be set or merged into the state.
   * @param {keyof T} key - Optional key specifying a specific property to update in the state.
   */
  const setMultiState = (value: any, key?: keyof T) => {
    if (key) setState((prev: any) => ({ ...prev, [key]: value }));
    else setState((prev: any) => ({ ...prev, ...value }));
  };

  /**
   * Function to reset the state to its initial value or a provided value.
   *
   * @param {any} value - Optional value to set the state to (default: initialState).
   */
  const resetState = (value?: any) => {
    if (value) setState(value);
    else setState(initialState);
  };

  return {
    multiState: state,
    resetState,
    setMultiState,
  };
};
