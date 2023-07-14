import { useState } from 'react'

export const useMultiState = <T extends object>(initialState: T) => {
  const [state, setState] = useState<T>(initialState)

  /* It takes a value and a key, and if the key is present, it sets the state to the value of the key,
   * otherwise it sets the state to the value */
  const setMultiState = (value: any, key?: string) => {
    if (key) {
      setState((prev: Any) => ({ ...prev, [key]: value }))
    } else {
      setState(value)
    }
  }

  const resetState = () => {
    setState(initialState)
  }

  return {
    multiState: state,
    resetState,
    setMultiState,
  }
}
