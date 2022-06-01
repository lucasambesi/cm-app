import {useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {AuthContext} from '../auth/authContext'
import {types} from '../types/types'

export const logout = () => {
    const navigate = useNavigate()
    const {dispatch} = useContext(AuthContext)

    dispatch({
        type: types.logout,
    })

    navigate('login', {
        replace: true,
    })
    // localStorage.clear()
    // if ( window.location.pathname !== '/login' ) window.location = '/login'
}
