import React from 'react'
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import YouTubeIcon from '@material-ui/icons/YouTube';
import HeadsetIcon from '@material-ui/icons/Headset';
import ListAltIcon from '@material-ui/icons/ListAlt';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
const Sidebar = () => {

    
    return (
        <div className="sidebar">
            <div className="sidebar-elements">
                <span className="sidebar-icon"><HomeIcon/></span>
                <button className="sidebar-btn"> Home</button>
            </div>
            <div className="sidebar-elements">
                <span className="sidebar-icon"><YouTubeIcon/></span>
                <button className="sidebar-btn">Videos</button>
            </div>
            <div className="sidebar-elements">
                <span className="sidebar-icon"><HeadsetIcon/></span>
                <button className="sidebar-btn">Audios</button>
            </div>
            <div className="sidebar-elements">
                <span className="sidebar-icon"><ListAltIcon/></span>
                <button className="sidebar-btn">Blogs</button>
            </div>
            <div className="">
                <hr></hr>
            </div>
            <div className="sidebar-elements">
                <span className="sidebar-icon"><FavoriteBorderIcon/></span>
                <button className="sidebar-btn">My watch list</button>
            </div>
            <div className="sidebar-elements">
                <span className="sidebar-icon"><PersonAddIcon/></span>
                <button className="sidebar-btn">Following</button>
            </div>
        </div>
    )
}

export default Sidebar
