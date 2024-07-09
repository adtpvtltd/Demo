import React, { useState, useEffect } from 'react';
import Login from './register/Login';

function DelayedLogin() {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogin(true);
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (!showLogin) {
    return <div>Loading...</div>; // You can customize this loading message
  }

  return <Login />;
}

export default DelayedLogin;
