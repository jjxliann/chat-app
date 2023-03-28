import React, { useEffect, useState } from 'react'
import "./Sidebar.css";
import SidebarChannel from './SidebarChannel';
import CallIcon from '@mui/icons-material/Call';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { Avatar } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db, {auth} from "./firebase"
import { collection, query, onSnapshot } from "firebase/firestore";


 function Sidebar() {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "channels"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setChannels(
        snapshot.docs.map((doc) =>({
        id: doc.id,
        channel: doc.data(),
        }))
      )
    }
    );
  }, []);

  const handleAddChannel = () =>{
      const channelName = prompt("Name your channel");

      if(channelName) {
        db.collection("channels").add({
          channelName: channelName,
        });
      }
  };

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

          <AddIcon onClick={handleAddChannel} className="sidebar__addChannel"/>
        </div>
        
      

      <div className="sidebar__channelsList">
        {channels.map((channel) =>(
          <SidebarChannel/>
        ))}
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

      <div className='sidebar__profile'>
        <Avatar onClick= {() => auth.signOut()} src={user.photo}/>
        <div className="sidebar__profileInfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid}</p>
        </div>
        <div className="sidebar__profileIcons">
          <SettingsIcon/> 
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
