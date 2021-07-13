import { Checkbox, IconButton } from '@material-ui/core'
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router-dom'
import './emailrow.css'
function EmailRow({ id, title, subject, description, time }) {
    const history = useHistory()
    return (
        <div onClick={() => history.push('/mail')} className="email-row">
            <div className="email-row-options">
                <Checkbox fontSize="small" />
                <IconButton>
                    <StarBorderOutlined fontSize="small" />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined fontSize="small" />
                </IconButton>
            </div>
            <h3 className="email-row-title">{title}</h3>
            <div className="email-row-subject">
                <h4>{subject}
                    <span className="email-row-description">
                        -{description}
                    </span>
                </h4>

            </div>
            <div className="email-row-time">
                {time}
            </div>
        </div>
    )
}

export default EmailRow
