import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./index.css";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import Order from "./components/Order";
import Payment from "./components/Payment";
import UserPageTest from "./components/UserTest";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const hideFooterPaths = ["/register", "/login"];
  return (
    <>
      <Navbar />
      {children}
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/order" element={<Order />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/user-test" element={<UserPageTest />} />
          <Route path="/*" element={<div className="text-center">Halaman Not Found</div>} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
