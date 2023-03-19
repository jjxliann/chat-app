import React from 'react'
import "./Sidebar.css";


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

          <AddIcon className="sidebar__addChannel"/>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
