import React from 'react'
import {Routes, Route} from 'react-router-dom'

import {Markets} from '../Markets/Markets'
import {NavBar} from './NavBar'
import {Overview} from '../Portfolio/Crypto/Overview/Overview'

export const NavRouter = () => {
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
        </>
    )
}
