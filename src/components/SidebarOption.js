import React from 'react'
import "./SidebarOption.css"
import { useHistory } from "react-router-dom"
import db from './firebase'
function SidebarOption({ Icon, title, id, addChannelOption }) {

    const history = useHistory();

    const selectChannel = () => {
        if (id) {
            history.push(`/room/${id}`);
        } else {
            history.push(title);
        }
    };

    const addChannel = () => {
        const channelName = prompt("Please enter the channel name ");
        if (channelName) {
            db.collection('rooms').add({
                name: channelName
            })
        }
    }

    return (
        <div className="row sidebarOption">
            <div class="sixteen wide column sidebarOption__icon" onClick={addChannelOption ? addChannel : selectChannel} id={id}>
                {Icon ? <span>{Icon}  {title}</span> : <span> <i class="comment icon"></i>  {title} </span>}
            </div>
           
        </div>
    )
}

export default SidebarOption
