import {  IconButton } from '@material-ui/core'
import { Archive, ArrowBack, ArrowBackIos, ArrowForwardIos, CheckCircle, Delete, LabelImportant, LabelImportantOutlined, Markunread, MoreVert, Print, Report } from '@material-ui/icons'
import WatchLater from '@material-ui/icons/WatchLater'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {  selectOpenMail } from '../../features/mailSlice'
import './mail.css'
function Mail() {
    const history = useHistory()
    const selectedMail = useSelector(selectOpenMail)
    return (
        <div className="mail">
            <div className="email-tools">
                <div className="email-tools-left">
                    <div className="email-tools-left-start">
                        <IconButton>
                            <ArrowBack fontSize="small" onClick={() => history.push('/')} />
                        </IconButton>
                        <IconButton>
                            <Archive fontSize="small" />
                        </IconButton>
                        <IconButton>
                            <Report fontSize="small" />
                        </IconButton>
                        <IconButton>
                            <Delete fontSize="small" />
                        </IconButton>
                    </div>
                    <div className="email-tools-left-center">

                        <IconButton>
                            <Markunread fontSize="small" />
                        </IconButton>
                        <IconButton>
                            <WatchLater fontSize="small" />
                        </IconButton>
                        <IconButton>
                            <CheckCircle fontSize="small" />
                        </IconButton>

                    </div>
                    <div className="email-tools-left-end">
                        <IconButton>
                            <LabelImportantOutlined />
                        </IconButton>
                        <IconButton>
                            <MoreVert />
                        </IconButton>

                    </div>



                </div>
                <div className="email-tools-right">
                    <IconButton>
                        <Print fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <ArrowBackIos fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <ArrowForwardIos fontSize="small" />
                    </IconButton>

                </div>
            </div>
            <div className="mail-body">
                <div className="mail-body-header">
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportant className="mail-important" />
                    <p>{selectedMail?.title}</p>
                    <p className="mail-time">{selectedMail?.time}</p>

                </div>
                <div className="mail-message">
                    {selectedMail?.description}                </div>


            </div>


        </div>
    )
}

export default Mail
