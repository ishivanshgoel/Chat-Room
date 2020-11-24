import React, {useState} from 'react'
import db from "./firebase";
import "./ChatInput.css"
import {useStateValue} from "./StateProvider"
import firebase from "firebase"


function ChatInput({channelName,channelId}) {
    const [input,setInput] = useState("");
    const [{user}] = useStateValue();

    const sendMessage = (e)=>{
        e.preventDefault();
        if(channelId){
            db.collection('rooms').doc(channelId).collection('messages').add({
                message:input,
                timeStamp:firebase.firestore.FieldValue.serverTimestamp (),
                user: user.displayName,
                userImage: user.photoURL
            })
           
        }
        else{
            console.log("Didn't get channel Id")
        }
    }

    return (
        
            <div className="ui fluid icon input">
                <input placeholder={`Message ${channelName}`} type="text" onChange={(e)=>setInput(e.target.value)}/>
                <button className="circular ui icon button chat__sendButton" onClick={sendMessage}>
                    <i className="paper plane outline icon"></i>
                </button>
            </div>
        
    )
}

export default ChatInput
