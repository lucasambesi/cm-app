import React, {useState} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import {Markets} from './components/Markets'
import {NavBar} from './components/NavBar/NavBar'
import {LangContext} from './hooks/langContext'

export const App = () => {
    const [lang, setLang] = useState('en')

    const paths = {
        markets: 'markets',
        portfolio: 'portfolio',
    }

    return (
        <>
            <LangContext.Provider value={{
                lang,
                setLang}}>
                <NavBar/>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path={paths.markets}
                            element={<Markets/>}/>
                        <Route
                            path={paths.portfolio}
                            element={<h1>Portfolio</h1>}/>
                        <Route
                            path="/"
                            element={<Markets/>}/>
                    </Routes>
                </BrowserRouter>
            </LangContext.Provider>
        </>
    )
}
