import React, { useState } from 'react';
import { useUser } from '../UserContext';
import './AccountSettings.css';

const AccountSettings = () => {
    const { username, setUsername } = useUser();
    const [newUsername, setNewUsername] = useState(username);

    const handleUsernameChange = (event) => {
        setNewUsername(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setUsername(newUsername);
        alert(`Username updated to: ${newUsername}`);
    };

    return (
        <div>
            <h1>Account Settings</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={newUsername} onChange={handleUsernameChange} />
                </label>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default AccountSettings;
