import axios from 'axios'

export default {
  name: 'tokenApi',

  getTokenList() {
    let url = 'https://raw.githubusercontent.com/SetProtocol/uniswap-tokenlist/main/set.tokenlist.json'
    return axios.get(url)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  },
  getUniSwapTokenChart() {
    let url = 'https://api.coinpaprika.com/v1/coins/btc-bitcoin'
    return axios.get(url)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  }
}