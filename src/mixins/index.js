import { mapGetters } from 'vuex';
import Web3 from 'web3';

export default {
  computed: {
    ...mapGetters('drizzle', ['drizzleInstance']),
  },
  data() {
    return {
      escrowAddress: '0xc43C2eB8DaC6394ab0Bb4BFC66fEBd351c59FFB2',
      tokenIdMatic: '0xe44FaB5F1bd279ee8B0D5D4661ABB172Bb21EBb0',
      tokenIdEth: '0xe88698a89006aa3da3da426a088030cfdcdb65f0',
      wrapEthAddress: '0x0F26BE4f5A74d6FAe6A45af0EAf1CB97AE8Cd0bA'
    }
  },
  methods: {
    approveTrans() {
      let amount = 135000000000000000 * 3;
      let amt = amount.toString();

      this.drizzleInstance.contracts['Erc20'].methods[
        'approve'
      ].cacheSend(this.escrowAddress, amt);
    },
    toWei(eth) {
      let weiValue = Web3.utils.toWei(eth, 'ether');
      return weiValue;
    },
    buyEthSmallBundle(numberofBundle) {
      let toWeiBundle = 72700000000000000 * numberofBundle;
      console.log(toWeiBundle);
      this.drizzleInstance.contracts['SolidEscrow'].methods[
        'buySmallBundle'
      ].cacheSend(this.tokenIdEth, {
        value: toWeiBundle,
      });
    },
    buyEthBigBundle(numberofBundle) {
      let toWeiBundle = 135000000000000000 * numberofBundle;
      console.log(toWeiBundle);
      this.drizzleInstance.contracts['SolidEscrow'].methods[
        'buyBigBundle'
      ].cacheSend(this.tokenIdEth, {
        value: toWeiBundle,
      });
    },
    // wrap eth bundle functions
    async buyWrapEthSmallBundle(numberofBundle) {
      let amount = 72700000000000000 * numberofBundle;
      let amt = amount.toString();

      await this.drizzleInstance.contracts['MaticEscrow'].methods[
        'buySmallBundleEth'
      ].cacheSend(this.tokenIdMatic, this.wrapEthAddress, amt);
    },

    // warap eth big bundle
    buyWrapEthBigBundle(numberofBundle) {
      let amount = 135000000000000000 * numberofBundle;
      let amt = amount.toString();

      this.drizzleInstance.contracts['MaticEscrow'].methods[
        'buyBigBundleEth'
      ].cacheSend(this.tokenIdMatic, this.wrapEthAddress, amt);
    },

    // matic bundles eth
    buyMaticBigBundle(numberofBundle) {
      let amount = 135000000000000000 * numberofBundle;
      let amt = amount.toString();
      this.drizzleInstance.contracts['MaticEscrow'].methods[
        'buyBigBundleMatic'
      ].cacheSend(this.tokenIdMatic, {
        value: amt,
      });
    },
    buyMaticSmallBundle(numberofBundle) {
      let amount = 72700000000000000 * numberofBundle;
      let amt = amount.toString();
      this.drizzleInstance.contracts['MaticEscrow'].methods[
        'buySmallBundleMatic'
      ].cacheSend(this.tokenIdMatic, {
        value: amt,
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