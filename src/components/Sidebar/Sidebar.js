import { Button } from '@material-ui/core'
import React from 'react'
import './sidebar.css'
import AddIcon from '@material-ui/icons/Add'
import InboxIcon from '@material-ui/icons/Inbox'
import SidebarOption from './Sidbaroption'
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SendIcon from '@material-ui/icons/Send';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import SidebarFooter from './SidebarFooter'
function Sidebar() {
    // const [menu, setMenu] = useState(true)
    //${menu && "minimal-screen"}
    return (
        <div className={`sidebar  `}>
            <Button startIcon={<AddIcon fontSize="large" />} className="sidebar__compose">Compose</Button>

            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true} />
            <SidebarOption Icon={StarIcon} title="Starred" number={80} selected={false} />
            <SidebarOption Icon={WatchLaterIcon} title="Snoozed" number={18} />
            <SidebarOption Icon={SendIcon} title="Sent" number={20} />
            <SidebarOption Icon={NoteIcon} title="draft" number={35} />
            <SidebarOption Icon={ExpandMoreIcon} title="more" />
            <div className="sidebar-footer">
                <div className="sidebar-mid">
                    <p>Meet</p>
                    <SidebarFooter Icon={VideocamIcon} title="New Meeting" />
                    <SidebarFooter Icon={KeyboardIcon} title="Join a Meeting" />

                </div>
                <div className="sidebar-end">
                    <p>Hangouts</p>
                </div>

            </div>

        </div>
    )
}

export default Sidebar
