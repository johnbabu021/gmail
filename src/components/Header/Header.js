import React from 'react'
import './header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AppsIcon from '@material-ui/icons/Apps';
import SettingsIcon from '@material-ui/icons/Settings';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';

function Header() {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const signOut = () => {
        dispatch(logout())
    }
    return (
        <div className="header">
            <div className="header-left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="/images/gm.png" alt="" />
            </div>
            <div className="header-middle">
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input type="text" placeholder="Search mail" />
                <IconButton>
                    <ArrowDropDownIcon className="header-arrowbtn" />


                </IconButton>
            </div>
            <div className="header-right">

                <IconButton>
                    <HelpOutlineIcon />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <Avatar src={user?.photoUrl} onClick={signOut} />
                </IconButton>

            </div>
        </div>
    )
}

export default Header
