import React, {useEffect} from 'react'

import {useFetchCoins} from '../../hooks/useFetchCoins'
import {TableCoins} from './TableCoins/TableCoins'


export const Markets = () => {
    const {state: {data, loading}} = useFetchCoins()
    useEffect(() => {
    }, [])

    useEffect(() => {
    }, [data])


    return (
        <>
            {!loading ? <TableCoins coins={data}/> : <h1>Cargando</h1>}
        </>
    )
}

