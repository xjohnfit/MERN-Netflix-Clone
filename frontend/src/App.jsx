import HomePage from "./pages/home/HomePage";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import { AuthContext } from "./authContext/AuthContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

function App() {

  const { user } = useContext(AuthContext);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={!user ? <Register /> : <HomePage />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        {
        user ? (
          <>
            <Route path="/movies" element={<HomePage type="movie" />} />
            <Route path="/shows" element={<HomePage type="show" />} />
            <Route path="/watch" element={<Watch />} />
          </>
        ) : <Route path="*" element={<Navigate to='/login' />} />
      }

      </Routes>
    </BrowserRouter>
  );
}

export default App;
