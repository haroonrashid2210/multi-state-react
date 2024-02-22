# Multi-State-React

`multi-state-react` is a custom React hook designed to streamline the management of multiple state values within functional components using the `useState` hook. It simplifies the process of updating and resetting multiple state properties simultaneously.

## Installation

You can effortlessly integrate `multi-state-react` into your project using npm or yarn:

```bash
npm install multi-state-react
```

or

```bash
yarn add multi-state-react
```

## Usage

To utilize the `useMultiState` hook within your React components, follow these simple steps:

```javascript
import React, { useEffect } from "react";
import { useMultiState } from "multi-state-react";

function MyComponent() {
  // Define your initial state object
  const initialState = {
    page: 0,
    nodesCount: 0,
    searchTerm: '',
  };

  // Utilize the useMultiState hook with your initial state
  const multiState = useMultiState(initialState);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await fetch('https://example.com')
    // response = { nodes: any[], nodesCount: number }
    multiState.setMultiState({ nodesCount: response.nodesCount })
  }

  return (
    <div>
      {/* Your components */}
    </div>
  );
}

export default MyComponent;
```

## API

### `useMultiState(initialState)`

A custom hook that initializes the state and provides functions to update and reset the state.

- `initialState`: An object representing the initial state values.

Returns an object with the following properties:

- `multiState`: The current state object.
- `resetState(value)`: Resets the state to its initial values. Optionally, you can provide a custom value to reset the state to.
- `setMultiState(value)`: Updates and patches the state with the provided value.

## Benefits

- **Simplified State Management**: Manage multiple state properties effortlessly within your components.
- **Efficient Updates**: Update and reset multiple state values simultaneously, improving code readability and maintainability.
- **Compatible with useState**: Seamlessly integrates with React's `useState` hook, ensuring compatibility with existing codebases.

Enhance your React projects with `multi-state-react`, simplifying state management and improving overall development efficiency.