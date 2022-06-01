import {useContext} from 'react'
import {useNavigate} from 'react-router-dom'

import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'

// import {logout} from '../../../../services/self'
import {ListItem, ListItemCollapser} from './ListItem'
import {LangContext} from '../../../../hooks/langContext'
import {AuthContext} from '../../../../auth/authContext'
import {types} from '../../../../types/types'

export function UserMenu() {
    const {lang} = useContext(LangContext)
    const {dispatchUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const translate = {
        en: {
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
        es: {
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


    const logout = () => {
        dispatchUser({
            type: types.logout,
        })

        navigate('login', {
            replace: true,
        })
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
                text={translate[lang].logout.text}
                onClick={logout} />
        </List>
    )
}
