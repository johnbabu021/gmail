import React from 'react'
import './sidebarfooter.css'

function SidebarFooter({ Icon, title }) {
    return (
        <div className="sidebar-middle">
            <Icon />
            <p>{title}</p>
        </div>
    )
}

export default SidebarFooter
