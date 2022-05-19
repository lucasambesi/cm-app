/* eslint-disable camelcase */
import clsx from 'clsx'
import {Avatar} from '@mui/material'

export const columns = [
    {
        field: 'image',
        headerAlign: 'center',
        headerName: 'Icon',
        sortable: false,
        width: 70,
        pinnable: true,
        renderCell: ({row: {name, image}}) => (
            <Avatar
                alt={name}
                src={image}
                sx={{width: 32, height: 32}}
            />
        ),
        cellClassName: ({row: {name}}) => {
            return clsx('default-theme', {
                text: name,
            })
        },
    },
    {
        field: 'symbol',
        headerAlign: 'center',
        headerName: 'Symbol',
        sortable: false,
        width: 80,
        valueGetter: ({row: {symbol}}) =>
            `$${symbol.toUpperCase() || ''}`,
        cellClassName: ({row: {symbol}}) => {
            return clsx('default-theme', {
                text: symbol,
            })
        },
    },
    {
        field: 'name',
        headerAlign: 'center',
        headerName: 'Coin',
        sortable: false,
        width: 120,
        valueGetter: ({row: {name}}) =>
            `${name || ''}`,
        cellClassName: ({row: {name}}) => {
            return clsx('default-theme', {
                text: name,
            })
        },
    },
    {
        field: 'current_price',
        headerAlign: 'center',
        headerName: 'Price',
        sortable: false,
        width: 120,
        valueGetter: ({row: {current_price: current}}) =>
            `$${current || ''}`,
        cellClassName: ({row: {current_price: current}}) => {
            return clsx('default-theme', {
                price: current,
            })
        },
    },
    {
        field: 'price_change_24h',
        headerAlign: 'center',
        headerName: 'Price 24h',
        sortable: false,
        width: 120,
        valueGetter: ({row: {price_change_24h: price}}) =>
            `$${price || ''}`,
        cellClassName: ({row: {price_change_24h: price}}) => {
            if (price == null) {
                return ''
            }

            return clsx('coin-color', {
                negative: price < 0,
                positive: price > 0,
            })
        },
    },
    {
        field: 'low_24h',
        headerAlign: 'center',
        headerName: 'Low 24',
        description: 'Max low in 24hs',
        sortable: false,
        width: 120,
        valueGetter: ({row: {low_24h}}) =>
            `$${low_24h || ''}`,
        cellClassName: ({row: {low_24h}}) => {
            return clsx('coin-color', {
                negative: low_24h,
            })
        },
    },
    {
        field: 'high_24h',
        headerAlign: 'center',
        headerName: 'High 24',
        description: 'Max high in 24hs',
        sortable: false,
        width: 120,
        valueGetter: ({row: {high_24h}}) =>
            `$${high_24h || ''}`,
        cellClassName: ({row: {high_24h}}) => {
            return clsx('coin-color', {
                positive: high_24h,
            })
        },
    },
    {
        field: 'diff_24hs',
        headerAlign: 'center',
        headerName: 'Diff 24hs',
        description: 'Diff min and max in 24hs',
        sortable: false,
        width: 120,
        valueGetter: ({row: {low_24h, high_24h}}) =>
            `$${high_24h - low_24h || ''}`,
        cellClassName: (params) => {
            return clsx('coin-color', {
                positive: (high_24h - low_24h),
            })
        },
        cellClassName: ({row: {low_24h, high_24h}}) => {
            const diff = (low_24h - high_24h)
            return clsx('coin-color', {
                negative: diff < 0,
                positive: diff > 0,
            })
        },
    },
]
