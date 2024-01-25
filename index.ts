import { useState } from 'react'

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
  const [state, _setState] = useState<T>(initialState)

  /**
   * Function to set multiple state values at once.
   *
   * @param {any} value - The value to be set or merged into the state.
   * @param {keyof T} key - Optional key specifying a specific property to update in the state.
   */
  const setState = (value: any, key?: keyof T) => {
    if (key) {
      _setState((prev: T) => ({ ...prev, [key]: value }))
    } else {
      _setState((prev: T) => ({ ...prev, ...value }))
    }
  }

  /**
   * Function to reset the state to its initial value or a provided value.
   *
   * @param {any} value - Optional value to set the state to (default: initialState).
   */
  const resetState = (value?: any) => {
    if (value) {
      _setState(value)
    } else {
      _setState(initialState)
    }
  }

  return {
    state,
    resetState,
    setState,
  }
}
