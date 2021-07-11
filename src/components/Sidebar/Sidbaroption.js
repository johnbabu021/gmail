import React from 'react'
import './sidebaroption.css'
function Sidbaroption({ Icon, title, number, selected }) {
    return (
        <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
            <Icon className={`inbox-icon `} />
            <h3>{title}</h3>
            <p>{number}</p>

        </div>
    )
}

export default Sidbaroption
