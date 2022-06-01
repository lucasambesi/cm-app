import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'

import {NavRouter} from '../components/NavBar/NavRouter'
import {SignIn} from '../components/Login/Login'
import {PrivateRouter} from './PrivateRouter'

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
                    element={<SignIn />}>
                </Route>
                <Route
                    path={paths.navRouter}
                    element={
                        <PrivateRouter>
                            <NavRouter />
                        </PrivateRouter>
                    }>
                </Route>
            </Routes>
        </Router>
    )
}
