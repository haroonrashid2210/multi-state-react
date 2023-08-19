# use-multi-state

`use-multi-state` is a custom React hook that provides a convenient way to manage multiple state values in a functional component using the `useState` hook. It allows you to easily update and reset multiple state properties simultaneously.

## Installation

You can install `use-multi-state` using npm or yarn:

```bash
npm install use-multi-state
```

or

```bash
yarn add use-multi-state
```

## Usage

Import the useMultiState hook in your React component and use it to manage your state:

```js
import React from "react";
import { useMultiState } from "use-multi-state";

function MyComponent() {
  // Define your initial state object
  const initialState = {
    counter: 0,
    name: "",
    isActive: false,
  };

  // Use the useMultiState hook with your initial state
  const { multiState, resetState, setMultiState } = useMultiState(initialState);

  const handleIncrement = () => {
    // Update a specific property in the state
    setMultiState(multiState.counter + 1, "counter");
  };

  const handleToggleActive = () => {
    // Toggle the 'isActive' property
    setMultiState(!multiState.isActive, "isActive");
  };

  const handleReset = () => {
    // Reset the state to the initial values
    resetState();
  };

  return (
    <div>
      <p>Counter: {multiState.counter}</p>
      <p>Name: {multiState.name}</p>
      <p>Active: {multiState.isActive ? "Yes" : "No"}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleToggleActive}>Toggle Active</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default MyComponent;
```

## API

`useMultiState(initialState)`
A custom hook that initializes the state and provides functions to update and reset the state.

`initialState`: An object representing the initial state values.
Returns an object with the following properties:

- `multiState`: The current state object.
- `resetState(value)`: Resets the state to its initial values. Optionally, you can provide a custom value to reset the state to.
- `setMultiState(value, key?)`: Updates the state. If key is provided, it updates a specific property; otherwise, it merges the value into the current state.
