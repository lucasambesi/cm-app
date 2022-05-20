import React, {useContext} from 'react'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import {
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material'

import {LangContext} from '../../hooks/langContext'

const translate = {
    es: {
        spanish: 'Español',
        english: 'Ingles',
    },
    en: {
        spanish: 'Spanish',
        english: 'English',
    },
}

export const CollapseItem = ({open}) => {
    const {lang, setLang} = useContext(LangContext)
    return (
        <Collapse
            in={open}
            timeout="auto"
            unmountOnExit>
            <List
                component="div"
                disablePadding>
                <ListItemButton sx={{pl: 4}} onClick={() => setLang('es')}>
                    <ListItemIcon>
                        <ArrowForwardIcon color='primary'/>
                    </ListItemIcon>
                    <ListItemText
                        primary={translate[lang].spanish}
                        color='primary' />
                </ListItemButton>
                <ListItemButton sx={{pl: 4}} onClick={() => setLang('en')}>
                    <ListItemIcon>
                        <ArrowForwardIcon color='primary'/>
                    </ListItemIcon>
                    <ListItemText
                        primary={translate[lang].english}
                        color='primary' />
                </ListItemButton>
            </List>
        </Collapse>
    )
}
