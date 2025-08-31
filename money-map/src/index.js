import React from 'react';
import ReactDOM from 'react-dom/client'; // use 'react-dom/client' in React 18
import 'tailwindcss/tailwind.css';
import App from './App';

// Create root using the new React 18 API
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
