import React, {useState} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import {Markets} from './components/Markets'
import {NavBar} from './components/NavBar'
import {LangContext} from './hooks/langContext'

export const App = () => {
    const [lang, setLang] = useState('en')

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
            }}>
                <NavBar setLang={setLang}/>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path={translate[lang].markets}
                            element={<Markets/>}
                        />
                        <Route
                            path={translate[lang].portfolio}
                            element={<h1>Portfolio</h1>}
                        />
                        <Route path="/" element={<Markets/>}/>
                    </Routes>
                </BrowserRouter>
            </LangContext.Provider>
        </>
    )
}
