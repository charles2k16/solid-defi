<template>
  <div>
    <div
      class="flex-justify-between-center mt-20 wallects"
      @click="selectMetamask"
    >
      <span> <span class="green_dot"></span> MetaMask</span>
      <vs-avatar>
        <img src="../assets/images/metamask.png" alt="meta" />
      </vs-avatar>
    </div>
    <div
      class="flex-justify-between-center mt-20 wallects"
      @click="selectMatic"
    >
      <span>Matic Wallet</span>
      <vs-avatar>
        <img src="../assets/images/walletconnect-logo.svg" alt="wallect" />
      </vs-avatar>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import WalletConnectProvider from '@maticnetwork/walletconnect-provider';
import Web3 from 'web3';
import MaticEscrow from '@/abi/MaticEscrow';

export default {
  name: 'ConnectWallect',
  computed: {
    ...mapGetters('drizzle', ['isDrizzleInitialized']),
    ...mapGetters('drizzle', ['drizzleInstance']),
    ...mapGetters('accounts', ['activeAccount', 'activeBalance']),
  },
  data() {
    return {
      networkIds: [1, 3, 4, 42, 137, 80001],
      maticNetwork: [137, 80001],
      acc: '',
    };
  },
  methods: {
    selectMetamask() {
      if (
        this.isDrizzleInitialized &&
        this.checkNetwork(this.drizzleInstance.web3._provider.networkVersion)
      ) {
        this.openNotification(
          'top-right',
          '#2c2f44',
          'Already Connected.',
          'You already connected to Metamask'
        );
      } else if (!this.isDrizzleInitialized) {
        this.connectToMetaMask();
      } else {
        this.errorNotify('top-center', 'danger');
      }
    },
    selectMatic() {
      let netId = parseInt(this.drizzleInstance.web3._provider.networkVersion);
      if (this.maticNetwork.includes(netId)) {
        this.connectedNotify('top-right', '#2c2f44');
      } else {
        this.connectToMatic();
      }
    },
    connectToMatic() {
      const maticProvider = new WalletConnectProvider({
        host: `https://rpc-mumbai.matic.today`,
        callbacks: {
          onConnect: console.log('connected'),
          onDisconnect: console.log('disconnected!'),
        },
      });

      let maticEscrowAddress = '0x5011D48D4265b6fB8228600a111b2fAa1fDA3139';
      const maticWeb3 = new Web3(maticProvider);
      const myContractInstance = new maticWeb3.eth.Contract(
        MaticEscrow.abi,
        maticEscrowAddress
      );

      const tx = {
        from: maticEscrowAddress, // get deployed account and send any transfer
        to: maticEscrowAddress,
        gas: 800000,
        data: myContractInstance.methods.setTx('sign tx').encodeABI(),
      };

      maticWeb3.eth.signTransaction(tx).then(result => {
        maticWeb3.eth
          .sendSignedTransaction(result)
          .then(receipt => console.log(receipt));
      });
    },
    async connectToMetaMask() {
      if (window.ethereum) {
        // let address = '0x802f19580D9F00C31BdfdaE3A2831d5Dd4a5B6D9';

        // let provider = 'metamask';
        // let web3Provider = new Web3.providers.HttpProvider(provider);
        // let web3 = new Web3(web3Provider);

        // const accounts = await window.ethereum.request({
        //   method: 'eth_requestAccounts',
        // });
        // const account = accounts[0];
        // console.log(account);

        // web3.eth.defaultAccount = account;

        // const myContractInstance = new web3.eth.Contract(abi, address);

        // myContractInstance.methods.setTx('meta tx').send({
        //   from: web3.eth.defaultAccount,
        //   gasPrice: 0,
        // });
        this.openNotification(
          'top-right',
          '#2c2f44',
          'Connect to Metamask.',
          'Connect your wallect to metamask to continue'
        );
      } else {
        this.openNotification(
          'top-center',
          '#2c2f44',
          'Non-Ethereum browser',
          'Non-Ethereum browser detected.You should consider downloading MetaMask!'
        );
      }
    },
  },
};
</script>
