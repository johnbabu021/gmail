import React, { useEffect, useState } from 'react'
import "./emaillist.css"
import RefreshIcon from '@material-ui/icons/Refresh';
import { Checkbox, IconButton } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { ContactsOutlined, MoreVert } from '@material-ui/icons';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import InboxIcon from '@material-ui/icons/Inbox'
import EmailType from './mail/EmailTypes'
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import EmailRow from './mailcomponent/EmailRow'
import { db } from '../../lib/firebase';

function EmailList() {
    const [emails, setEmails] = useState([])
    useEffect(() => {
        db.collection('emails').orderBy('timestamp', 'desc').onSnapshot((snapshot) => setEmails(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))

        ))
    }, [])
    return (
        <div className="email-list">
            <div className="email-settings">
                <div className="email-settings-left">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RefreshIcon />
                    </IconButton> <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className="email-settings-right">
                    <IconButton>
                        <ArrowBackIosIcon fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>
                </div>

            </div>
            <div className="email-section">
                <EmailType Icon={InboxIcon} title="Primary" color="#d65469" selected={true} />
                <EmailType Icon={PeopleIcon} title="Social" color="#1A73E8" />
                <EmailType Icon={LocalOfferIcon} title="Promotions" color="green" />

            </div>
            <div className="email-row-itmes">

                {emails.map(({ id, data: { to, subject, message, timestamp } }) => (



                    < EmailRow
                        id={id}
                        key={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />

                ))}

            </div>

        </div>
    )
}

export default EmailList
