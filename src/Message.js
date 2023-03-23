import { Avatar } from '@mui/material'
import React from 'react'
import "./Message.css"

function Message() {
  return (
    <div className="message">
        <Avatar />
        <div className="message__info">
            <h4>
                huh
                <span className="message__timestamp">this is a timstamp</span>
            </h4>

            <p>this is a test message</p>
        </div>
    </div>
  )
}

export default Message