import React, {useContext, useState} from 'react'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import AdbIcon from '@mui/icons-material/Adb'

import {LangContext} from '../../hooks/langContext'
import {UserMenu} from './Menu/UserMenu/UserMenu'
import {PortfolioMenu} from './Menu/PortfolioMenu'
import {Link} from 'react-router-dom'

export const NavBar = () => {
    const {lang} = useContext(LangContext)

    const [anchorElNav, setAnchorElNav] = useState(null)
    const [anchorElUser, setAnchorElUser] = useState(null)

    const translate = {
        es: {
            appName: 'Crypto Manager',
            settingsTab: 'Abrir ajustes',
            pages: [
                {
                    name: 'Mercados',
                    path: 'markets',
                }],
        },
        en: {
            appName: 'Crypto Manager',
            settingsTab: 'Open settings',
            pages: [
                {
                    name: 'Markets',
                    path: 'markets',
                }],
        },
    }

    const handleOpenNavMenu = (e) => setAnchorElNav(e.currentTarget)

    const handleCloseNavMenu = () => setAnchorElNav(null)

    const handleOpenUserMenu = (e) => setAnchorElUser(e.currentTarget)

    const handleCloseUserMenu = () => setAnchorElUser(null)

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{
                        display: {
                            xs: 'none',
                            md: 'flex',
                        },
                        mr: 1}}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                        {translate[lang].appName}
                    </Typography>

                    <Box sx={{
                        flexGrow: 1,
                        display: {
                            xs: 'flex',
                            md: 'none',
                        }}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {
                                    xs: 'block',
                                    md: 'none',
                                },
                            }}>
                            {translate[lang].pages.map((page, index) => (
                                <MenuItem
                                    key={page.name}
                                    onClick={handleCloseNavMenu}>
                                    <Typography
                                        textAlign="center">{page.name}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{
                        display: {
                            xs: 'flex',
                            md: 'none'},
                        mr: 1,
                    }}/>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: {
                                xs: 'flex',
                                md: 'none',
                            },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                        {translate[lang].appName}
                    </Typography>
                    <Box sx={{
                        flexGrow: 1,
                        display: {
                            xs: 'none',
                            md: 'flex',
                        }}}>
                        {translate[lang].pages.map((page) => (
                            <Link
                                key={page.name}
                                to={page.path}>
                                <Button
                                    // to={page.path}
                                    sx={{my: 2,
                                        color: 'white',
                                        display: 'block',
                                    }}>
                                    {page.name}
                                </Button>
                            </Link>
                        ))}
                        <PortfolioMenu/>
                    </Box>
                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title={translate[lang].settingsTab}>
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{p: 0}}>
                                <Avatar
                                    alt=""
                                    src="/assets/profile.png"/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}>
                            <UserMenu/>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
