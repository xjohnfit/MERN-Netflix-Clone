import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AuthContextProvider } from './context/authContext/AuthContext.jsx';
import { ListContextProvider } from './context/listContext/ListContext.jsx';
import { UserContextProvider } from './context/userContext/UserContext.jsx';
import { MovieContextProvider } from './context/movieContext/MovieContext.jsx';

createRoot(document.getElementById('root')).render(
  //TODO <StrictMode> Enable React strict mode in production
  <AuthContextProvider>
    <UserContextProvider>
      <MovieContextProvider>
        <ListContextProvider>
          <App />
        </ListContextProvider>
      </MovieContextProvider>
    </UserContextProvider>
  </AuthContextProvider>
  //TODO </StrictMode>,
);
