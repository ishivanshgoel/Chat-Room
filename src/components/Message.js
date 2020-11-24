import React from 'react'
import "./Message.css"
function Message({ message, timeStamp, user, userImage }) {
    return (
            <div className="item">
                <div className="ui tini circular image">
                    <img src={userImage} />
                </div>
                <div className="content">
                    <a className="header"> {user} </a>
                    <div className="date">
                            {timeStamp && new Date(timeStamp.toDate()).toUTCString()}
                    </div>
                    <div className="description">
                        {message}
                </div>
                </div>
            </div>
    )
}

export default Message
