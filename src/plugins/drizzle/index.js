import SolidEscrow from '@/abi/SolidEscrow'
import MaticEscrow from '@/abi/MaticEscrow'
import WrapEthErc20 from '@/abi/WrapEthErc20'
import EthErc20 from '@/abi/EthErc20'
import MaticErc20 from '@/abi/MaticErc20'
import SolidFoundry from '@/abi/SolidFoundry'
import TestErc20 from '@/abi/TestErc20'

const options = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:9545'
    }
  },

  contracts: [
    SolidEscrow,
    MaticEscrow,
    WrapEthErc20,
    EthErc20,
    MaticErc20,
    SolidFoundry,
    TestErc20
  ],
  // events: {
  //   SolidProtocol: ['Transfer']
  // },
  polls: {
    // check accounts every 15 seconds
    accounts: 15000
  }
}

export default options