import { useState } from "react";

/**
 * Custom hook that provides multi-state management for a given object.
 *
 * @template T - The type of the initial state object.
 * @param {T} initialState - The initial state object.
 * @returns {{
 *   state: T,
 *   resetState: (value?: any) => void,
 *   setState: (value: any, key?: keyof T) => void,
 * }} An object containing state, resetState and setState properties.
 */
export const useMultiState = <T extends object>(initialState: T) => {
  // Use the useState hook to manage the state
  const [state, _setState] = useState<T>(initialState);

  /**
   * Function to set multiple state values at once.
   *
   * @param {any} value - The value to be set or merged into the state.
   */
  const setState = (value: Partial<T>) => {
    _setState((prev: T) => ({ ...prev, ...value }));
  };

  /**
   * Function to reset the state to its initial value or a provided value.
   *
   * @param {any} value - Optional value to set the state to (default: initialState).
   */
  const resetState = (value?: any) => {
    if (value) {
      _setState(value);
    } else {
      _setState(initialState);
    }
  };

  return {
    state,
    resetState,
    setState,
  };
};
