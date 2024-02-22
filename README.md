# Multi-State Management Hook for React

The `useMultiState` hook is a custom React hook that facilitates multi-state management for a given object. This hook is designed to simplify the process of managing multiple state variables within a React component, particularly when dealing with complex state structures.

## Installation

You can install the package using npm or yarn:

```bash
npm install multi-state-react
```

or

```bash
yarn add multi-state-react
```

## Usage

Import the `useMultiState` hook in your React component and initialize it with an initial state object. The hook returns an object containing the current state, a function to set multiple state values at once, and a function to reset the state to its initial value.

```javascript
import React from 'react';
import { useMultiState } from 'multi-state-react';

const MyComponent = () => {
  // Initialize the hook with an initial state object
  const { state, setState, resetState } = useMultiState({
    counter: 0,
    text: '',
    isCompleted: false,
  });

  // Example of using the state and setState function
  const handleIncrement = () => {
    setState({ counter: state.counter + 1 });
  };

  const handleInputChange = (event) => {
    setState({ text: event.target.value });
  };

  const handleReset = () => {
    resetState(); // Reset to initial state
  };

  return (
    <div>
      <p>Counter: {state.counter}</p>
      <input type="text" value={state.text} onChange={handleInputChange} />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default MyComponent;
```

## API

The `useMultiState` hook returns an object with the following properties:

- `state`: The current state object.
- `setState(value)`: A function to set multiple state values at once. It accepts a partial state object and merges it with the current state.
- `resetState(value?)`: A function to reset the state to its initial value. If a value is provided, it sets the state to that value; otherwise, it resets the state to the initial state object passed during initialization.

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/haroonrashid2210/multi-state-react/blob/main/LICENSE) file for details.