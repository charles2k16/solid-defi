import { mapGetters } from 'vuex';
import Web3 from 'web3';

export default {
  computed: {
    ...mapGetters('drizzle', ['drizzleInstance']),
  },
  methods: {
    toWei(eth) {
      let weiValue = Web3.utils.toWei(eth, 'ether');
      return weiValue;
    },
    buyEthSmallBundle(numberofBundle) {
      let toWeiBundle = 72700000000000000 * numberofBundle;
      console.log(toWeiBundle);
      this.drizzleInstance.contracts['SolidEscrow'].methods[
        'buySmallBundle'
      ].cacheSend('0xe88698a89006aa3da3da426a088030cfdcdb65f0', {
        value: toWeiBundle,
      });
    },
    buyEthBigBundle(numberofBundle) {
      let toWeiBundle = 135000000000000000 * numberofBundle;
      console.log(toWeiBundle);
      this.drizzleInstance.contracts['SolidEscrow'].methods[
        'buyBigBundle'
      ].cacheSend('0xe88698a89006aa3da3da426a088030cfdcdb65f0', {
        value: toWeiBundle,
      });
    },

    // wrap eth bundle functions
    async buyWrapEthSmallBundle(numberofBundle) {
      let wrapEthAddress = '0x1Dc5810Bf9c3CB44c5DE946763402eCD5F05864c'
      let escrowAddress = '0x4aA35B411d532c4B3a1703060807d03519e0944b'
      let tokenId = '0x370fF1A69bC4BaB81AF12d8D12f5B832CA687242'
      let amount = 72700000000000000 * numberofBundle;
      let amt = amount.toString();

      await this.drizzleInstance.contracts['Erc20'].methods[
        'approve'
      ].cacheSend(escrowAddress, amt);

      await this.drizzleInstance.contracts['MaticEscrow'].methods[
        'buySmallBundleEth'
      ].cacheSend(tokenId, wrapEthAddress, amt);
    },
    buyWethBigBundle(numberofBundle) {
      let ethAddress = '0x1Dc5810Bf9c3CB44c5DE946763402eCD5F05864c'
      let amount = 135000000000000000 * numberofBundle;
      console.log(amount);
      this.drizzleInstance.contracts['MaticEscrow'].methods[
        'buyBigBundleEth'
      ].cacheSend('0xe88698a89006aa3da3da426a088030cfdcdb65f0', ethAddress, amount);
    },

    // matic bundles eth
    buyMaticBigBundle(numberofBundle) {
      let toWeiBundle = 135000000000000000 * numberofBundle;
      console.log(toWeiBundle);
      this.drizzleInstance.contracts['MaticEscrow'].methods[
        'buyBigBundleMatic'
      ].cacheSend('0xe88698a89006aa3da3da426a088030cfdcdb65f0', {
        value: toWeiBundle,
      });
    },
    buyMaticSmallBundle(numberofBundle) {
      let toWeiBundle = 72700000000000000 * numberofBundle;
      console.log(toWeiBundle);
      this.drizzleInstance.contracts['MaticEscrow'].methods[
        'buySmallBundleMatic'
      ].cacheSend('0xe88698a89006aa3da3da426a088030cfdcdb65f0', {
        value: toWeiBundle,
      });
    },
    checkNetwork(netId) {
      let id = parseInt(netId);
      let networks = [1, 2, 3, 4, 42, 61, 62, 137, 80001];
      if (networks.includes(id)) {
        return true;
      } else {
        // this.errorNotify('top-center', 'danger')
        return false
      }
    },
    getNetworkName(netId) {
      let id = parseInt(netId);
      let netName = "Wrong Network"
      switch (id) {
        case 1:
          netName = "Mainnet"
          break;
        case 3:
          netName = "Ropsten"
          break;
        case 4:
          netName = "Rinkeby"
          break;
        case 42:
          netName = "Kovan"
          break;
        case 137:
          netName = "Matic-Mainnet"
          break;
        case 80001:
          netName = "Mumbai-Testnet"
          break;
        case 61:
          netName = "ETH Classic Mainnet"
          break;
        case 62:
          netName = "ETH Classic Testnet"
          break;
        case 2:
          netName = "ETH Classic Testnet"
          break;
      }
      return netName;
    },
    copyToClip(text) {
      let textArea = document.createElement("textarea");
      textArea.value = text;

      textArea.select();
      textArea.setSelectionRange(0, 99999); /* For mobile devices */
      document.execCommand("copy");

      alert("Copied the text: " + text);
    },
    openNotification(position = null, color, title, text) {
      this.$vs.notification({
        progress: 'auto',
        color,
        position,
        title,
        text,
      });
    },
    connectedNotify(position = null, color) {
      this.$vs.notification({
        progress: 'auto',
        color,
        position,
        title: 'Already Connected.',
        text: `You already connected to a Matic Network`,
      });
    },
    errorNotify(position = null, color) {
      this.$vs.notification({
        color,
        position,
        title: 'Wrong Network.',
        text: `Choose an appropriate network to connect`,
      });
    },
  }
}