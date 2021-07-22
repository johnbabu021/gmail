import { Button } from '@material-ui/core'
import React from 'react'
import './login.css'
import { auth, provider } from '../../lib/firebase'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'

function Login() {
    const dispatch = useDispatch()
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(({ user }) => {
                dispatch(
                    login({
                        displayName: user.displayName,
                        email: user.email,
                        photoUrl: user.photoURL
                    })
                )
            }).catch((err) => alert(err.message))
    }
    return (
        <div className="login">
            <div className="login_container">
                <img src='/images/gm.png' alt="" />
                <Button variant="contained" color="primary" onClick={signIn}>
                    Login</Button>
            </div>
        </div>
    )
}

export default Login
