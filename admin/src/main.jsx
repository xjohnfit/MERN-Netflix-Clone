import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AuthContextProvider } from './context/authContext/authContext.jsx';
import { MovieContextProvider } from './context/movieContext/MovieContext.jsx';
import { ListContextProvider } from './context/listContext/ListContext.jsx';

createRoot(document.getElementById('root')).render(
  //TODO <StrictMode> Enable React strict mode in production
    <AuthContextProvider>
      <MovieContextProvider>
        <ListContextProvider>
          <App />
        </ListContextProvider>
      </MovieContextProvider>
    </AuthContextProvider>
  // </StrictMode>,
);
