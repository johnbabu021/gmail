import React from 'react'
import "./emaillist.css"
import RefreshIcon from '@material-ui/icons/Refresh';
import { Checkbox, IconButton } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { MoreVert } from '@material-ui/icons';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import InboxIcon from '@material-ui/icons/Inbox'
import EmailType from './mail/EmailTypes'
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import EmailRow from './mailcomponent/EmailRow'
function EmailList() {
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
                <EmailRow id="1" title="hello" subject="subject" time="23-3-534" description="hello everyone" />
                <EmailRow id="1" title="hello" subject="subject" time="23-3-534" description="hello everyone" />
                <EmailRow id="1" title="hello" subject="subject" time="23-3-534" description="hello everyone and this is a pafjaskfjalksf sfsfjiassfskkfasifjakssfjisdfjalkdf dfaisfajsskfasf " />
                <EmailRow id="1" title="hello" subject="subject" time="23-3-534" description="hello everyone" />
                <EmailRow id="1" title="hello" subject="subject" time="23-3-534" description="hello everyone" />
                <EmailRow id="1" title="hello" subject="subject" time="23-3-534" description="hello everyone" />

            </div>

        </div>
    )
}

export default EmailList
