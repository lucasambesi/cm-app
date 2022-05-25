import {useContext} from 'react'

import {
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import {LangContext} from '../../../../hooks/langContext'

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
                <ListItemLanguage
                    lang={'es'}
                    language={translate[lang].spanish}/>
                <ListItemLanguage
                    lang={'en'}
                    language={translate[lang].english}/>
            </List>
        </Collapse>
    )
}


const ListItemLanguage = ({lang, language}) => {
    const {setLang} = useContext(LangContext)
    return (
        <ListItemButton sx={{pl: 4}} onClick={() => setLang(lang)}>
            <ListItemIcon>
                <ArrowForwardIcon color='primary'/>
            </ListItemIcon>
            <ListItemText
                primary={language}
                color='primary' />
        </ListItemButton>
    )
}
