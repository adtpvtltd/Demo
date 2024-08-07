import React, { useContext } from 'react';
import { AuthContext } from './auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div>
            <h1>Welcome, User!</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default UserPage;
