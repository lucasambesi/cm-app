import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'

import {NavRouter} from '../components/NavBar/NavRouter'
import {Login} from '../components/Login/Login'

export const AppRouter = () => {
    const paths = {
        login: '/login',
        navRouter: '/*',
    }

    return (
        <Router>
            <Routes>
                <Route
                    path={paths.login}
                    element={<Login />}>
                </Route>
                <Route
                    path={paths.navRouter}
                    element={<NavRouter />}>
                </Route>
            </Routes>
        </Router>
    )
}
