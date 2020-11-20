import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import StartBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import "./Chat.css"
import db from "./firebase"
import Message from './Message'
import ChatInput from "./ChatInput"

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
                snapshot.docs.map(doc =>{ return doc.data()})
            )
        )
    }, [roomId])

    // console.log(roomMessages)

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong># {roomDetails?roomDetails.name:"room name"} </strong>
                        <StartBorderOutlinedIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon />
                Details
            </p>
                </div>
            </div>
            <div className="chat__messages">
                {
                    // console.log(roomMessage)
                    
                    roomMessage.map(({ message, timeStamp, user, userImage }) => { 
                        return (<Message message={message} timeStamp={timeStamp} user={user} userImage={userImage} />) 
                    })
                }

            </div>
            <ChatInput channelName={roomDetails?roomDetails.name:console.log("Not found")} channelId={roomId} />
        </div>
    )
}

export default Chat;
