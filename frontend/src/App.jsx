import "./app.scss";
import HomePage from "./pages/home/HomePage";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const user = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={user ? <HomePage /> : <Register />} />
        <Route path="/register" element={!user ? <Register /> : <HomePage />} />
        <Route path="/login" element={!user ? <Login /> : <HomePage />} />
        {user && (
          <>
            <Route path="/movies" element={<HomePage type="movie" />} />
            <Route path="/shows" element={<HomePage type="show" />} />
            <Route path="/watch" element={<Watch />} />
          </>
        )}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
