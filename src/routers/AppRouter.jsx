import {useState} from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'

import {LangContext} from '../hooks/langContext'
import {NavRouter} from '../components/NavBar/NavRouter'

export const AppRouter = () => {
    const [lang, setLang] = useState('en')

    const paths = {
        default: '/',
        login: '/login',
        navRouter: '/*',
    }

    return (
        <LangContext.Provider value={{
            lang,
            setLang}}>
            <Router>
                <Routes>
                    <Route
                        path={paths.login}
                        element={<h1>Login</h1>}>
                    </Route>
                    <Route
                        path={paths.navRouter}
                        element={<NavRouter/>}>
                    </Route>
                </Routes>
            </Router>
        </LangContext.Provider>
    )
}
