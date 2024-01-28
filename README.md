# Optimism Auth Library

## Overview

`my-auth-library` is a React component library that provides a simple authentication button for integration with the Optimism protocol.

## Getting Started

To use this library in your React project, follow these steps:

### Installation

Install the library using npm:

```bash
npm install my-auth-library
```

### Usage

1. Import the component in your React application:

   ```jsx
   import React from 'react';
   import MyAuthComponent from 'my-auth-library';

   function App() {
     return (
       <div>
         <MyAuthComponent />
       </div>
     );
   }

   export default App;
   ```

2. Customize the component with your own parameters:

   ```jsx
   <MyAuthComponent
     label="Connect with Optimism"
     onSuccess={handleAuthenticationSuccess}
     onFailure={handleAuthenticationFailure}
   />
   ```

### Parameters

- **`label` (optional):** The text to be displayed on the authentication button. Default is "Auth With Optimism".
- **`onSuccess` (optional):** Callback function to be executed on successful authentication.
- **`onFailure` (optional):** Callback function to be executed on authentication failure.

## Development

If you want to contribute or modify the library, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/my-auth-library.git
   cd my-auth-library
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Make your changes to the component in the `src` directory.

4. Build the library:

   ```bash
   npm run build
   ```

5. Publish the changes:

   ```bash
   npm login  # if not logged in
   npm publish --access public
   ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to the contributors who made this library possible.
- Inspired by the need for easy integration with Optimism protocol.
