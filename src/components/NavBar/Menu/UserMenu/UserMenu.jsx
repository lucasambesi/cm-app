import React, {useContext} from 'react'

import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'

import {LangContext} from '../../../../hooks/langContext'
import {ListItem, ListItemCollapser} from './ListItem'

export function UserMenu() {
    const {lang} = useContext(LangContext)

    const translate = {
        es: {
            subheader: 'Menu',
            profile: {
                text: 'Profile',
                icon: 'PermIdentityIcon',
            },
            account: {
                text: 'Group',
                icon: 'GroupWorkIcon',
            },
            lang: {
                text: 'Language',
                icon: 'TranslateIcon',
            },
            logout: {
                text: 'Logout',
                icon: 'LogoutIcon',
            },
        },
        en: {
            subheader: 'Menu',
            profile: {
                text: 'Perfil',
                icon: 'PermIdentityIcon',
            },
            account: {
                text: 'Grupo',
                icon: 'GroupWorkIcon',
            },
            lang: {
                text: 'Lenguaje',
                icon: 'TranslateIcon',
            },
            logout: {
                text: 'Salir',
                icon: 'LogoutIcon',
            },
        },
    }

    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper'}}
            component='nav'
            aria-labelledby='nested-list-subheader'
            subheader={
                <ListSubheader component='div' id='nested-list-subheader'>
                    {translate[lang].subheader}
                </ListSubheader>}>
            <ListItem
                icon={translate[lang].profile.icon}
                text={translate[lang].profile.text} />
            <ListItem
                icon={translate[lang].account.icon}
                text={translate[lang].account.text} />
            <ListItemCollapser
                icon={translate[lang].lang.icon}
                text={translate[lang].lang.text} />
            <ListItem
                icon={translate[lang].logout.icon}
                text={translate[lang].logout.text} />
        </List>
    )
}
