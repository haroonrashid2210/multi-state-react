import React, { useState } from 'react'

export default function useMultiState(initialState) {

  const [multiState, setMultiState] = useState(initialState)

  const setState = (value, key) => {
    const obj = multiState
    obj[key] = value
    setMultiState(obj)
  }

  const resetState = () => {
    setMultiState(initialState)
  }

  return {
    multiState,
    setState,
    resetState
  }

}
