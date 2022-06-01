import {useState} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import {LangContext} from '../../hooks/langContext'
import {Markets} from '../Markets/Markets'
import {NavBar} from './NavBar'
import {Overview} from '../Portfolio/Crypto/Overview/Overview'


export const NavRouter = () => {
    const [lang, setLang] = useState('en')
    const user = JSON.parse(localStorage.getItem('user')) || {logged: false}

    const paths = {
        default: '/',
        markets: 'markets',
        portfolio: {
            crypto: 'crypto',
            actions: 'actions',
        },

    }

    const IsLoggedIn = () =>
        user.logged ? <Markets /> : <Navigate to="/login" replace={true}/>

    return (
        <LangContext.Provider value={{
            lang,
            setLang}}>
            <NavBar/>
            <Routes>
                <Route
                    path={paths.markets}
                    element={<Markets/>} />
                <Route
                    path={paths.portfolio.crypto}
                    element={<Overview/>} />
                <Route
                    path={paths.portfolio.actions}
                    element={<h1>Actions</h1>} />
                <Route
                    path={paths.default}
                    element={<IsLoggedIn />} />
            </Routes>
        </LangContext.Provider>
    )
}
