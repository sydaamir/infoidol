import React from 'react'
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import YouTubeIcon from '@material-ui/icons/YouTube';
import HeadsetIcon from '@material-ui/icons/Headset';
import ListAltIcon from '@material-ui/icons/ListAlt';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import Login from '../Login/Login';
import VideoLike from '../HitApi/VideoLike';
import VideoDislike from '../HitApi/VideoDislike';
import VideoCategory from '../HitApi/VideoCategory';
import MusicList from '../HitApi/MusicList';
import UploadMusic from '../HitApi/UploadMusic';
import MusicCategory from '../HitApi/MusicCategory';
import MusicDislike from '../HitApi/MusicDislike';
const Sidebar = () => {

    
    return (
        <div className="sidebar">
            <div className="sidebar-elements">
                <span className="sidebar-icon"><HomeIcon/></span>
                <a href="#">Home</a>
                {/* <button className="sidebar-btn"> Home</button> */}
            </div>
            <div className="sidebar-elements">
                <span className="sidebar-icon"><YouTubeIcon/></span>
                <a href="#">Videos</a>
            </div>
            <div className="sidebar-elements">
                <span className="sidebar-icon"><HeadsetIcon/></span>
                <a href="#">Audios</a>
            </div>
            <div className="sidebar-elements">
                <span className="sidebar-icon"><ListAltIcon/></span>
                <a href="#">Blogs</a>
            </div>
            <div className="">
                <hr></hr>
            </div>
            <div className="sidebar-elements">
                <span className="sidebar-icon"><FavoriteBorderIcon/></span>
                <a href="#">   Watch List</a>
            </div>
            <div className="sidebar-elements">
                <span className="sidebar-icon"><PersonAddIcon/></span>
                <a href="#">Following</a>
            </div>

            {/* For Testing Purpose Only */}
            <div className="sidebar-elements">
                <span className="sidebar-icon"><PersonAddIcon/></span>
                <a ><Login /></a>
            </div>

            <div className="btn">
                <>
                    <VideoLike/>
                </>
            </div>
            <><MusicDislike/></>
            <><MusicCategory/></>
            <><UploadMusic/></>
            <><VideoDislike/></>
            <><VideoCategory/></>
            <><MusicList/></>
        </div>
    )
}

export default Sidebar
