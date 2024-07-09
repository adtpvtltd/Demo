import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Login from './register/Login';
import Signup from './register/Signup';
import Navbar from './components/Navbar'; 
import Home from './home/Home';
import ForgotPassword from './register/ForgotPassword';
import CartProvider from './cart/CartContext'; // Import CartProvider
import AuthProvider, { AuthContext } from './auth/AuthContext';
import UserPage from './UserPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <AuthProvider> 
        <CartProvider> 
          <Main />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

function Main() {
  const location = useLocation();
  const { isAuthenticated } = useContext(AuthContext);
  const hideNavbarPaths = ['/signup', '/forgotpassword'];

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={isAuthenticated ? <UserPage /> : <Navigate to="/login" />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
