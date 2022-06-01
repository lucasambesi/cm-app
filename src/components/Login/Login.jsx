import {useState, useContext} from 'react'
import {useNavigate} from 'react-router-dom'

import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import {createTheme, ThemeProvider} from '@mui/material/styles'

import {types} from '../../types/types'
import {AuthContext} from '../../auth/authContext'

const theme = createTheme()

export const SignIn = () => {
    const navigate = useNavigate()
    const {dispatchUser} = useContext(AuthContext)
    const lastPath = localStorage.getItem('lastPath') || '/markets'
    const [action, setAction] = useState({
        type: types.login,
        payload: {
            email: '',
            password: '',
        },
    })

    const texts = {
        email: {
            id: 'email',
            text: 'Email Address',
        },
        password: {
            id: 'password',
            text: 'Password',
        },
        submit: 'Sign in',
        forgot: 'Forgot password?',
        account: 'Don\'t have an account? Sign Up',
    }


    const handleSubmit = () => {
        dispatchUser(action)
        navigate(lastPath, {
            replace: true,
        })
    }

    const handleChange = (e) => {
        setAction({
            type: types.login,
            payload: {
                ...action.payload,
                [e.target.name]: e.target.value,
            },
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }} >
                    <Avatar sx={{
                        m: 1,
                        bgcolor: 'secondary.main',
                    }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography
                        component="h1"
                        variant="h5">
                        {texts.signIn}
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{mt: 1}}>
                        <TextField
                            onChange={handleChange}
                            margin="normal"
                            required
                            fullWidth
                            id={texts.email.id}
                            label={texts.email.text}
                            name={texts.email.id}
                            autoComplete={texts.email.id}
                            autoFocus />
                        <TextField
                            onChange={handleChange}
                            margin="normal"
                            required
                            fullWidth
                            name={texts.password.id}
                            label={texts.password.text}
                            type={texts.password.id}
                            id={texts.password.id}
                            autoComplete="current-password" />
                        <Button
                            type="submit"
                            // onClick={handleSubmit}
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}} >
                            {texts.submit}
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    {texts.forgot}
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {texts.account}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}
