import axios from 'axios'

export default {
  name: "supplyApi",

  addSupplyChart (chartData) {
    let url = 'https://quiet-wave-74001.herokuapp.com/api/v1/charts'
    return axios.post(url, chartData)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  getSupplyChart () {
    let url = 'https://quiet-wave-74001.herokuapp.com/api/v1/charts/graph'
    return axios.get(url)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  }
}