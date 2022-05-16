import {useState, useEffect} from 'react'
import {getLists} from '../helpers/getLists'

export const useFetchLists = () => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    })

    useEffect(() => {
        getLists().then((response) => {
            setState({
                data: response,
                loading: false,
            })
        })
    }, [])

    return {state, setState}
}
