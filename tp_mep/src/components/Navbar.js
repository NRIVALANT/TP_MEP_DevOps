import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ContactsIcon from '@mui/icons-material/Contacts';
import './Navbar.css';

export default function Navbar() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) =>   {
    setValue(newValue);
  };

  return (
    <BottomNavigation className='bottom-navigation' value={value} onChange={handleChange}>
      <BottomNavigationAction className='bottom-navigation-action'
        label="Home"
        value="Home "
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Contact"
        value="Contact"
        icon={<ContactsIcon />}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}
