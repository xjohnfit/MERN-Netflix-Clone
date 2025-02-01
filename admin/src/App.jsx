import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";

import Login from "./Login";

import Header from "./Header";
import Home from "./Home";
import Sidebar from "./Sidebar";

import UpdateUser from "./users/UpdateUser";
import UserList from "./users/UserList";

import MoviesList from "./movies/MoviesList";
import EditMovie from "./movies/EditMovie";

import Lists from "./lists/Lists";
import EditList from './lists/EditList';

export default function App() {

  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      {
        user && <Header />
      }
      <div className="flex">
        {
          user && <Sidebar />
        }
        <Routes>
          <Route exact path="/" element={user ? <Home /> : <Navigate to="/login" />}></Route>
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />}></Route>
          <Route path="/users" element={user ? <UserList /> : <Navigate to="/login" />}></Route>
          <Route path="/user/:userId" element={user ? <UpdateUser /> : <Navigate to="/login" />}></Route>

          <Route path="/movies" element={user ? <MoviesList /> : <Navigate to="/login" />}></Route>
          <Route path="/edit/:movieId" element={user ? <EditMovie /> : <Navigate to="/login" />}></Route>

          <Route path="/lists" element={user ? <Lists /> : <Navigate to="/login" />}></Route>
          <Route path="/list/:listId" element={user ? <EditList /> : <Navigate to="/login" />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}