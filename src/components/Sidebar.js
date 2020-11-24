import React from 'react'
import { useState, useEffect } from 'react'
import SidebarOption from "./SidebarOption"
import "./Sidebar.css"
import db from './firebase';
import { useStateValue } from "./StateProvider"

function Sidebar() {
    const [channels, setChannel] = useState([]);
    const [{ user }] = useStateValue();

    useEffect(() => {
        // Run this code when the sidebar compnent loads
        db.collection('rooms').onSnapshot(snapshot => {
            setChannel(snapshot.docs.map(doc => {
                return (
                    {
                        id: doc.id,
                        name: doc.data().name
                    }
                )
            }))
        })
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__headerImage">
                    <img class="ui tiny circular image" src={user.photoURL}/>
                </div>
                <div className="sidebar__headerName">
                    <h4><b>{user.displayName}</b></h4>
                </div>
            </div>
            <div className="ui internally celled grid">

                <SidebarOption Icon={<i class="building outline icon"></i>} title="Announcements" />
                <SidebarOption Icon={<i class="code icon"></i>} title="General" />
                <SidebarOption Icon={<i class="coffee icon"></i>}title="Off Topic" />
                <SidebarOption Icon={<i class="book icon"></i>} title="Rules" />
                <SidebarOption Icon={<i class="linkify icon"></i>} title="Links" />
                <SidebarOption Icon={<i class="plus square outline icon"></i>} addChannelOption='ok' title="Add Channel" />
                {/*Connect to db and list all  the channels */}
                {/* <Sidebar Options... /> */}
                {channels.map(channel => {
                    return <SidebarOption title={channel.name} id={channel.id} />
                })}

            </div>

        </div>
    )
}

export default Sidebar
