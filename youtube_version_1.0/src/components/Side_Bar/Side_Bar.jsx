import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import './Side_Bar.css'
import SideBar_Row from '../SideBar_Row/SideBar_Row';
import { Link } from "react-router-dom";
import LoginForm from '../LoginForm/LoginForm';
const Side_Bar = (props) => {
    return (
        <div className="Side_Bar">
            {/* <h1>Side Bar</h1> */}
            <Link to="/">
            <SideBar_Row selected Icon={HomeIcon} title="Home"/>
            </Link>
            <Link to={`/trend-index/${props.id}`}>
            <SideBar_Row Icon={WhatshotIcon} title="Trending"/>
            </Link>
            <Link to={`/subs/${props.id}`}>
            <SideBar_Row Icon={SubscriptionsIcon} title="Subscription"/>
            </Link>
            <hr/>
            {/* <Link to={`/login`}>
            <SideBar_Row Icon={LoginForm} />
            </Link> */}
            <SideBar_Row Icon={VideoLibraryIcon} title="Library"/>
        </div>
    );
}

export default Side_Bar;
