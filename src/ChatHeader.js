import React from 'react'
import './ChatHeader.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';

function ChatHeader({channelName}) {
  return (
    <div className="chatHeader">
        <div className="chatHeader__left">
            <h3>
                <span className="chatHeader__hash">#</span>
                {channelName}
            </h3>
        </div>

        <div className="chatHeader__right">
            <NotificationsIcon/>
            <NotificationsIcon/>
            <NotificationsIcon/>

        <div className="chatHeader__search">
            <input placeholder="Search" />
            <SearchRoundedIcon />
        </div>

      </div>
    </div>
  )
}

export default ChatHeader