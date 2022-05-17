import React, {useEffect} from 'react'

import {useFetchCoins} from '../hooks/useFetchCoins'
import {TableCoins} from './TableCoins'


export const Markets = () => {
    const {state: {data, loading}} = useFetchCoins()
    useEffect(() => {

    }, [loading])

    useEffect(() => {
        // console.log('data', data)
    }, [data])

    return (
        <>
            {!loading && <TableCoins coins={data}/>}
        </>
    )
}

