# multi-state-react

`multi-state-react` is a custom React hook that provides a convenient way to manage multiple state values in a functional component using the `useState` hook. It allows you to easily update and reset multiple state properties simultaneously.

## Installation

You can install `multi-state-react` using npm or yarn:

```bash
npm install multi-state-react
```

or

```bash
yarn add multi-state-react
```

## Usage

Import the useMultiState hook in your React component and use it to manage your state:

```js
import React, { useEffect } from "react";
import { useMultiState } from "multi-state-react";

function MyComponent() {
  // Define your initial state object
  const initialState = {
    page: 0,
    nodeCount: 0,
    searchTerm: '',
  };

  // Use the useMultiState hook with your initial state
  const paginationState = useMultiState(initialState);

  useEffect(() => {
    fetchData()
  }, [...paginationState.watchers]) // [page, nodeCount, searchTerm]

  const fetchData = async () => {
    const response = await fetch('api')
    paginationState.setState(response.nodeCount, 'nodeCount')
  }

  return (
    <div>
      {/* Some component */}
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
- `setMultiState(value, key?)`: Updates the state. If the key is provided, it updates a specific property; otherwise, it merges the value into the current state.
- `watchers`: Array of state first-level hierarchy keys

---

MIT @ [haroonrashid2210](https://github.com/haroonrashid2210/multi-state-react)
