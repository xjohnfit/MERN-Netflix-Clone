import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AuthContextProvider } from './context/authContext/authContext.jsx';
import { MovieContextProvider } from './context/movieContext/MovieContext.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode> Enable React strict mode in production
    <AuthContextProvider>
      <MovieContextProvider>
        <App />
      </MovieContextProvider>
    </AuthContextProvider>
  // </StrictMode>,
);
