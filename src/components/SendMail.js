import { Button } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React from 'react'
import './sendmail.css'

function SendMail() {
    return (
        <div className="sendmail">
            <div className="sendmail-header">
                <h3>New Message</h3>
                <Close />
            </div>
            <form action="/login">
                <input type="text" placeholder="To" />
                <input type="text" placeholder="Subject" />
                <input type="text" placeholder="" className="email-option-message" />
                <div className="sendmail-options">
                    <Button
                        className="sentMail-sent"
                        varient="contained"
                        type="submit"
                    >Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
