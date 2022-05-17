/* eslint-disable max-len */
import axios from 'axios'

const REACT_APP_API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false'

export const getTopCoins = async () => {
    const coins = await axios.get(REACT_APP_API_URL)
    console.log('coins', coins.data)
    return coins.data
}
