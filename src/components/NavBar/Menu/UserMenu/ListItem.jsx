import React, {useState} from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import LogoutIcon from '@mui/icons-material/Logout'
import GroupWorkIcon from '@mui/icons-material/GroupWork'
import TranslateIcon from '@mui/icons-material/Translate'

import {CollapseItem} from './Collapse'

const setIcon = (icon) => {
    switch (icon) {
    case 'PermIdentityIcon': return <PermIdentityIcon color='primary'/>
    case 'GroupWorkIcon': return <GroupWorkIcon color='primary'/>
    case 'LogoutIcon': return <LogoutIcon color='primary'/>
    case 'TranslateIcon': return <TranslateIcon color='primary'/>
    default: return ''
    }
}

export const ListItem = ({icon, text, onClick}) => {
    return (
        <ListItemButton onClick={onClick}>
            <ListItemIcon >
                {setIcon(icon)}
            </ListItemIcon>
            <ListItemText primary={text}/>
        </ListItemButton>
    )
}

export const ListItemCollapser = ({icon, text}) => {
    const [open, setOpen] = useState(true)
    const handleClick = () => setOpen(!open)

    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    {setIcon(icon)}
                </ListItemIcon>
                <ListItemText primary={text}/>
                {open ?
                    <ExpandLess color='primary'/> :
                    <ExpandMore color='primary'/>}
            </ListItemButton>
            <CollapseItem open={open}/>
        </>
    )
}
