import { Button } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React from 'react'
import './sendmail.css'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from '../features/mailSlice'
import firebase from 'firebase'
import { db } from '../lib/firebase'

function SendMail() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {

        db.collection('emails').add({
            to: data.To,
            subject: data.Subject,
            message: data.Message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()

        })
        dispatch(closeSendMessage())
    }
    const dispatch = useDispatch()
    return (
        <div className="sendmail">
            <div className="sendmail-header">
                <h3>New Message</h3>
                <Close onClick={() => dispatch(closeSendMessage())} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="To"

                    {...register("To", { required: true })}
                />
                {errors.To && <p className="sendmail-error">Reciptant is required</p>}
                <input type="text" placeholder="Subject"
                    {...register("Subject", { required: true })}

                />
                {errors.Message && <p className="sendmail-error">Message is required</p>}
                <input type="text" placeholder="" className="email-option-message"
                    {...register("Message", { required: true })}
                />
                <div className="sendmail-options">
                    <Button
                        className="sentMail-sent"
                        varient="contained"
                        type="submit"
                    >Send</Button>
                </div>
            </form>
        </div >
    )
}

export default SendMail
