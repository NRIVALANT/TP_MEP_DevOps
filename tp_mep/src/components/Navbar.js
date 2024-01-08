import * as React from 'react';
import { Link } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ContactsIcon from '@mui/icons-material/Contacts';
import './Navbar.css';

export default function Navbar() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation className='bottom-navigation' value={value} onChange={handleChange}>
      <BottomNavigationAction className='bottom-navigation-action'
        component={Link}
        to="/home"
        label="Home"
        value="Home "
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/favorites"
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/contact"
        label="Contact"
        value="Contact"
        icon={<ContactsIcon />}
      />
      <BottomNavigationAction component={Link} to="/folder" label="Folder" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}
