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
            console.log("Channel id nhi mili")
        }
    }


    return (
        <div className="chatInput">
            <form>
                <input placeholder={`Message ${channelName}`} type="text" onChange={(e)=>setInput(e.target.value)}/>
                <button onClick={sendMessage}>Send</button>
            </form>
        </div>
    )
}

export default ChatInput
