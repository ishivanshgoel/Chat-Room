import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import db from "./firebase"
import Message from './Message'
import ChatInput from "./ChatInput"
import "./Chat.css"

function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessage, setRoomMessages] = useState([]);

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
                setRoomDetails(snapshot.data())
            })
        }

        db.collection('rooms').doc(roomId).collection('messages').orderBy('timeStamp', 'asc').onSnapshot(snapshot =>
            setRoomMessages(
                snapshot.docs.map(doc => { return doc.data() })
            )
        )
    }, [roomId])

    // console.log(roomMessages)

    return (
        <div className="chat">
            <div class="ui items chat__messagesBox">
                {
                    roomMessage.map(({ message, timeStamp, user, userImage }) => {
                        return (
                            <Message message={message} timeStamp={timeStamp} user={user} userImage={userImage} /> 
                        )
                    })
                }
            </div>
            <hr></hr>
            <ChatInput channelName={roomDetails ? roomDetails.name : console.log("Not found")} channelId={roomId} />
        </div>
    )
}

export default Chat;
