import React, {useState, useContext} from 'react'
import {Button, Menu, MenuItem} from '@mui/material'
import {Link} from 'react-router-dom'

import {LangContext} from '../../../hooks/langContext'

export const PortfolioMenu = () => {
    const {lang} = useContext(LangContext)
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const translate = {
        es: {
            page: 'Portafolio',
            items: [
                {
                    name: 'Crypto',
                    path: 'crypto',
                },
                {
                    name: 'Acciones',
                    path: 'actions',
                }],
        },
        en: {
            page: 'Portfolio',
            items: [
                {
                    name: 'Crypto',
                    path: 'crypto',
                },
                {
                    name: 'Actions',
                    path: 'actions',
                }],
        },
    }

    const handleClose = () => setAnchorEl(null)

    const handleClick = (event) => setAnchorEl(event.currentTarget)

    return (
        <>
            <Button
                aria-controls={open ? 'basic-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                key={translate[lang].page}
                onClick={handleClick}
                sx={{my: 2,
                    color: 'white',
                    display: 'block',
                }}>
                {translate[lang].page}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {translate[lang].items.map((item)=>{
                    return (
                        <Link
                            key={item.name}
                            variant="body2"
                            to={item.path}
                            underline="none">
                            <MenuItem onClick={handleClose}>
                                {item.name}
                            </MenuItem>
                        </Link>
                    )
                })}
            </Menu>
        </>
    )
}
