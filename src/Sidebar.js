import React from 'react'
import "./Sidebar.css";
import SidebarChannel from './SidebarChannel';
import CallIcon from '@mui/icons-material/Call';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { Avatar } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';


 function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <h3>TEST room_name</h3>
            <ArrowDropDownIcon/>
        </div>

        <div className="sidebar__channels">
          <div className="sidebar__channelHeader">
            <div className="sidebar_header">
            <ArrowDropDownIcon/>
            <h4>TEXT channels</h4>
          </div>

          <AddIcon className="sidebar__addChannel"/>
        </div>
        
      

      <div className="sidebar__channelsList">
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
        </div>
      </div>

      <div className="sidebar__voice">
      <SignalCellularAltIcon className="sidebar__voiceIcon" fontSize="large"/>
       
        <div className="sidebar__voiceInfo">
          <h3>voice connected</h3>
          <p>Stream</p>
        </div>

      <div className="sidebar__voiceIcons">
        <InfoOutlinedIcon/>
        <CallIcon/>
       </div>
      </div>

      <div className="sidebar__profile">
        <Avatar src= "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2FWorldOfWarships%2Fcomments%2Fc3rqg3%2Fsaw_this_meme_in_yuro_vids_who_that_and_what_tgat%2F&psig=AOvVaw0HuPgvXvgBF3mfVfos2sGm&ust=1679479083781000&source=images&cd=vfe&ved=https://www.google.com/url?sa=i&url=https%3A%2F%2Flanguagelog.ldc.upenn.edu%2Fnll%2F%3Fp%3D27154&psig=AOvVaw0HuPgvXvgBF3mfVfos2sGm&ust=1679479083781000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNj9iqTh7P0CFQAAAAAdAAAAABA3"/>
        <div className="sidebar__profileInfo">
          <h3>@name</h3>
          <p>thisistest</p>
        </div>
        <div className="sidebar__profileIcons">
          <SettingsIcon/> 
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
