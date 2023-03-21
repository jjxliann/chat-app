import React from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function Chat() {
  return (
    <div className ="chat">
    <ChatHeader/>

    <div className="chat__messages">
        <Message />
    </div>

    <div className="chat__input">
        <AddCircleIcon fontSize="large"/>
        <form>
            <input placeholder={'Message # TESTCHSANNRL'}/>
            <button className="chat__inputButton" type="submit">
                Send Message
                </button>
        </form>
        <div className="chat__inputIcons">
            <GifIcon fontSize="large"/>
            <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  )
}

export default Chat