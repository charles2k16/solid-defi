import axios from 'axios'

export default {
  name: "referralsApi",

  addReferral(referral) {
    let url = 'https://quiet-wave-74001.herokuapp.com/api/v1/referrals'
    return axios.post(url, referral)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  },

  getReferral() {
    let url = 'https://quiet-wave-74001.herokuapp.com/api/v1/referrals'
    return axios.get(url)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  }
}