import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
// import { Input } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import { Avatar } from '@material-ui/core';
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Header.css';
const Header = () => {
    // Copied from React Strap
   
    return (
        <div className="header">
            {/* {Youtube Logo} */}
            <div className="header__leftIcons">
                <MenuIcon />
            {/* <h1>Logo</h1> */}
            <img 
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png" alt=""/>
            </div>
            
            {/* Search bar */}
            <div className="header__search">
            <TextField className="header__input" placeholder="Search" variant="outlined" />  
             {/* //TextFeild API from Material UI Framework */}
            
             <Button className="header__searchButton" variant="outlined"><SearchIcon /> </Button>
            </div>
            
            {/* The rest of icons */}
            <div className="d-flex  header__rightIcons">
            <VideoCallIcon color="action" />
            <AppsIcon className="right__AppsIcon" color="action" />
            <NotificationsIcon className="right__NotificationsIcon" color="action"/>
            <Avatar className="righticons__Avatar" src="https://maxcdn.icons8.com/Share/icon/Cultures/ninja_head_filled1600.png"/>
            {/* <div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Right-aligned menu
  </button>
  <div class="dropdown-menu dropdown-menu-right">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div> */}
            
            
            </div>
            
        </div>
    );
}

export default Header;
