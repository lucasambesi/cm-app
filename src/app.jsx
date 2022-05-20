import React, {useState} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import {Markets} from './components/Markets'
import {NavBar} from './components/NavBar/NavBar'
import {LangContext} from './hooks/langContext'

export const App = () => {
    const [lang, setLang] = useState('es')

    const translate = {
        es: {
            markets: 'Mercados',
            portfolio: 'Portafolio',
        },
        en: {
            markets: 'Markets',
            portfolio: 'Portfolio',
        },
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
                            path={translate[lang].markets}
                            element={<Markets/>}/>
                        <Route
                            path={translate[lang].portfolio}
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
