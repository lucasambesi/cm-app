import {useNavigate} from 'react-router-dom'

import {Button, Container} from '@mui/material'

export const Login = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/markets', {
            replace: true,
        })
    }

    return (
        <Container>
            <h1>Log In</h1>
            <hr/>
            <Button
                variant="contained"
                onClick={handleClick}>
                Login
            </Button>
        </Container>
    )
}
