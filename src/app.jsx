import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Markets} from './components/Markets'
import {NavBar} from './components/NavBar'

export const App = () => {
    return (
        <>
            <NavBar/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Markets/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
