import Header from "./Header";
import Home from "./Home";
import Sidebar from "./Sidebar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from "./UserList";
import User from "./User";
import ProductList from "./ProductList";
import Product from "./Product";
import Login from "./Login";
import { Navigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/authContext";

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

          {user &&

            (
              <>
                <Route path="/users" element={<UserList />}></Route>
                <Route path="/user/:userId" element={<User />}></Route>
                <Route path="/movies" element={<ProductList />}></Route>
                <Route path="/product/:productId" element={<Product />}></Route>
              </>
            )

          }
        </Routes>
      </div>
    </BrowserRouter>
  );
}