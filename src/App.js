import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Feed from './components/Feed';
import AccountSettings from './components/AccountSettings';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import { UserProvider } from './UserContext';

const App = () => {
  const [value, setValue] = React.useState('feed');

  return (
    <UserProvider>
      <Router>
        <div style={{ paddingBottom: '56px' }}>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/account-settings" element={<AccountSettings />} />
          </Routes>
        </div>

        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          style={{ position: 'fixed', bottom: 0, width: '100%' }}
        >
          <BottomNavigationAction
            label="Feed"
            value="feed"
            icon={<HomeIcon />}
            component={Link}
            to="/"
          />
          <BottomNavigationAction
            label="Account"
            value="account"
            icon={<SettingsIcon />}
            component={Link}
            to="/account-settings"
          />
        </BottomNavigation>
      </Router>
    </UserProvider>
  );
};

export default App;
