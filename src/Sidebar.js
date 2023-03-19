import React from 'react'
import "./Sidebar.css";
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CallIcon from '@mui/icons-material/Call';


 function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <h3>TEST room_name</h3>
            [/*ArrowDropDownIcon*/]
        </div>
        <div className="sidebar__channels">
          <div className="sidebar__channelHeader">
            <div className="sidebar_header">
            [/*ArrowDropDownIcon*/]
            <h4>TEXT channels</h4>
          </div>

          [/*AddIcon className="sidebar__addChannel"*/]
        </div>
      

      <div className="sidebar__channelsList">
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
        </div>
      </div>

      <div className="sidebar__voice">
       
        <div className="sidebar_voiceInfo">
          <h3>voice connected</h3>
          <p>Stream</p>
        </div>

      <div className="sidebar__voiceIcons">
        [/*InfoOutlinedIcon*/]
        [*/CallIcon*/]
      </div>

      </div>
    </div>
  );
}

export default Sidebar;
