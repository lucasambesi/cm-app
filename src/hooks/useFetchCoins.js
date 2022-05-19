import {useState, useEffect} from 'react'
import {getTopCoins} from '../helpers/getCoins'

export const useFetchCoins = () => {
    const [state, setState] = useState({
        data: {},
        loading: true,
    })

    useEffect(() => {
        getTopCoins().then((response) => {
            setState({
                data: response,
                loading: false,
            })
        })
    }, [])

    return {state, setState}
}
