import Header from "./Header";
import Home from "./Home";
import Sidebar from "./Sidebar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from "./UserList";
import User from "./User";
import ProductList from "./ProductList";
import Product from "./Product";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="flex">

        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users" element={<UserList />}></Route>
          <Route path="/user/:userId" element={<User />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/product/:productId" element={<Product />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}