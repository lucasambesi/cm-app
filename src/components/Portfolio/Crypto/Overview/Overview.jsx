import React from 'react'
import {Container, Grid, Paper} from '@mui/material'

export const Overview = () => {
    return (
        <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
            <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}>
                        {/* Futuro componente*/}
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}>
                        {/* Futuro componente*/}
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column'}}>
                        {/* Futuro componente*/}
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}