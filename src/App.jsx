import {useEffect, useReducer} from 'react'

import {AuthContext} from './auth/authContext'
import {authReducer} from './auth/authReducer'
import {AppRouter} from './routers/AppRouter'

export const App = () => {
    const init = () =>
        JSON.parse(localStorage.getItem('user')) || {logged: false}

    const [user, dispatchUser] = useReducer(authReducer, {}, init)

    useEffect(() => {
        if (!user) return
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    return (
        <AuthContext.Provider value = {{
            user,
            dispatchUser,
        }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}
