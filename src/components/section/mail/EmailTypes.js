import React from 'react'
import './emailtypes.css'
function EmailType({ Icon, title, color, selected }) {
    return (
        <div className={`email-types ${selected && "email-types-selection"}`}
            style={{
                borderBottom: `3px solid ${color}`,
                color: `${selected && color}`
            }}
        >
            <Icon fontSize="small" />
            <h4>{title}</h4>
        </div>
    )
}

export default EmailType
