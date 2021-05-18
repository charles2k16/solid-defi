import SolidEscrow from '@/abi/SolidEscrow'

const options = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:9545'
    }
  },

  contracts: [SolidEscrow],
  // events: {
  //   SolidProtocol: ['Transfer']
  // },
  polls: {
    // check accounts every 15 seconds
    accounts: 15000
  }
}

export default options