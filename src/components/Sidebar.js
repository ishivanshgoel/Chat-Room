import { FiberManualRecord } from '@material-ui/icons';
import React from 'react'
import {useState,useEffect} from 'react'
import './Sidebar.css';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import CreateIcon from "@material-ui/icons/Create"
import SidebarOption from "./SidebarOption"
import InsertCommentIcon from "@material-ui/icons/InsertComment"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import AddIcon from "@material-ui/icons/Add"
import db from './firebase';
import {useStateValue} from "./StateProvider"

function Sidebar() {
    const[channels,setChannel] = useState([]);
    const[{user}]=useStateValue();

    useEffect(()=>{
        // Run this code when the sidebar compnent loads
        db.collection('rooms').onSnapshot(snapshot=>{
            setChannel(snapshot.docs.map(doc=>{
                return (
                    {
                        id:doc.id,
                        name:doc.data().name
                    }
                )
            }))
        })
    },[])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Clever Programmer</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user.displayName}
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Thread" />
            <SidebarOption title="Youtube" />
            <SidebarOption title="You" />
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption title="Youtubes" />
            <SidebarOption Icon={ExpandLessIcon} title="Show Less" />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <SidebarOption Icon={AddIcon} addChannelOption='ok' title="Add Channel" />
            {/*Connect to db and list all  the channels */}
            {/* <Sidebar Options... /> */}
            {channels.map(channel =>{
                return <SidebarOption title={channel.name} id={channel.id} />
            })}
        </div>
    )
}

export default Sidebar
