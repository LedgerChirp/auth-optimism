# Optimism Authentication Library

This library provides a simple React component for integrating Optimism Ethereum authentication using the Optimism protocol and the MetaMask wallet.

## Installation

Install the library in your React project:

```bash
npm install optimism-auth-library
```

## Usage

### Import the `Authentication` component:

```javascript
import React from 'react';
import { Authentication } from 'optimism-auth-library';
import { YourAuthContextProvider } from '../context/AuthContext'; // Replace with your actual AuthContextProvider
// ...

const App = () => {
  return (
    <YourAuthContextProvider> {/* Replace with your actual AuthContextProvider */}
      {/* ... */}
      <Authentication />
      {/* ... */}
    </YourAuthContextProvider>
  );
};

export default App;
```

### Customization

The `Authentication` component can be customized by passing additional props:

```javascript
<Authentication buttonText="Connect with Optimism" />
```

### Auth Context

Make sure you have an authentication context provider (`YourAuthContextProvider` in the example above) that includes the necessary Ethereum provider and authentication state.

## Functionality

The `Authentication` component handles:

- Connecting to MetaMask and requesting account access.
- Retrieving account balance and displaying it.
- Handling account changes and updating the UI accordingly.
- Logging out and clearing authentication details.

## Styling

The component comes with default styling, but you can customize it by providing your own styles.

### Connected State:

```jsx
<div>
  <label>{/* Display balance here */}</label>
  <button className="account-button" onClick={/* Connect handler */}>
    {/* Display account details here */}
  </button>
  <button className="account-button" onClick={/* Logout handler */}>
    Logout
  </button>
</div>
```

### Disconnected State:

```jsx
<button
  type="button"
  onClick={/* Connect handler */}
  className="rounded-full bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
>
  Auth With Optimism
</button>
```

Feel free to adjust the styling to fit your application's design.

## Contributors

- @mustafaazad03
- Backend Developer

## License

This library is licensed under the [MIT License](LICENSE).
