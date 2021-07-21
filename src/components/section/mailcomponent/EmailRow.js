import { Checkbox, IconButton } from '@material-ui/core'
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectMail } from '../../../features/mailSlice'
import './emailrow.css'
function EmailRow({ id, title, subject, description, time }) {
    const history = useHistory()
    const dispatch = useDispatch()
    const openMail = () => {
        dispatch(
            selectMail({
                id,
                title,
                subject,
                description,
                time
            })
        )
        history.push('/mail')

    }
    return (
        <div onClick={openMail} className="email-row">
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
