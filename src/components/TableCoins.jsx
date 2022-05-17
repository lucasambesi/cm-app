import React from 'react'
import {DataGrid} from '@mui/x-data-grid'
import {Container} from '@mui/material'

export const TableCoins = ({coins}) => {
    const columns = [
        {
            field: 'image',
            headerName: 'Icon',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.image || ''}`,
        },
        {
            field: 'symbol',
            headerName: '#',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `$${params.row.symbol.toUpperCase() || ''}`,
        },
        {
            field: 'name',
            headerName: 'Coin',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.name || ''}`,
        },
        {
            field: 'current_price',
            headerName: 'Price',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `$${params.row.current_price || ''}`,
        },
        {
            field: 'price_change_24h',
            headerName: 'Price 24h',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `$${params.row.price_change_24h || ''}`,
        },
        {
            field: 'low_24h',
            headerName: 'Low 24',
            description: 'Max low in 24hs',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `$${params.row.low_24h || ''}`,
        },
        {
            field: 'high_24h',
            headerName: 'High 24',
            description: 'Max high in 24hs',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `$${params.row.high_24h || ''}`,
        },
    ]

    return (
        <Container>
            <br></br>
            <div style={{height: 650, width: '100%'}}>
                <DataGrid
                    rows={coins}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </div>
        </Container>
    )
}
