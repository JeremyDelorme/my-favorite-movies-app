import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/login', {
                username,
                password,
            });
            // Handle successful login, e.g., store token in localStorage
            console.log(response.data);
        } catch (error) {
            console.error('Login failed:', error.response.data.message);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
