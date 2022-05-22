import React, {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import {Markets} from './components/Markets'
import {NavBar} from './components/NavBar/NavBar'
import {Overview} from './components/Portfolio/Crypto/Overview/Overview'
import {LangContext} from './hooks/langContext'

export const App = () => {
    const [lang, setLang] = useState('en')

    const paths = {
        default: '/',
        markets: 'markets',
        portfolio: {
            crypto: 'crypto',
            actions: 'actions',
        },

    }

    return (
        <>
            <LangContext.Provider value={{
                lang,
                setLang}}>
                <Router>
                    <NavBar/>
                    <Routes>
                        <Route
                            path={paths.markets}
                            element={<Markets/>}/>
                        <Route
                            path={paths.portfolio.crypto}
                            element={<Overview/>}/>
                        <Route
                            path={paths.portfolio.actions}
                            element={<h1>Actions</h1>}/>
                        <Route
                            path={paths.default}
                            element={<Markets/>}/>
                    </Routes>
                </Router>
            </LangContext.Provider>
        </>
    )
}
