import { mapGetters } from 'vuex';
import Web3 from 'web3';

export default {
  computed: {
    ...mapGetters('drizzle', ['drizzleInstance']),
    ...mapGetters('contracts', ['getContractData']),
  },
  data () {
    return {
      maticEscrowAddress: '0x7fB34A69B92eE66673e5bC4D1908ABa257e60648',
      tokenIdMatic: '0x498E0A753840075c4925442D4d8863eEe49D61E2',
      tokenIdEth: '0x5011d48d4265b6fb8228600a111b2faa1fda3139',
      wrapEthAddress: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
      ethNewTotalToken: 680000,
      maticNewTotalToken: 1480000,
      ethTotalToken: 14000000,
      maticTotalToken: 16000000,
      ethPercentPurchased: 0,
      maticPercentPurchased: 0,
      clipboard: 'Copy to clipboard'
    }
  },
  methods: {
    toEth (weiBalance) {
      // let etherValue = Web3.utils.fromWei(weiBalance, 'ether');
      let ether = parseFloat(weiBalance).toFixed(4);
      return ether;
    },
    subscribeErrorResponse (errorString) {
      let extractError = errorString.split("<")
      return extractError[0];
    },
    getReferralString () {
      let randomString = Math.random().toString(36).substr(2);
      return `SLD-${randomString}`;
    },
    buyEstimate (etherAmount, totalSupply) {
      console.log('supply', totalSupply);
      let buyEstimate = Math.pow(3 / 2 * etherAmount + Math.pow(10000, 3 / 2), 2 / 3) - 10000

      let tt = buyEstimate * 10 ** 18
      let ff = tt - 1000000

      return ff.toString();
    },
    mintOnBuy (currentAddress, amount) {
      const amount1 = 0
      const tokenId = ''

      this.drizzleInstance.contracts['SolidFoundry'].methods[
        'mintOnBuy'
      ].cacheSend(tokenId, currentAddress, amount, amount1);
    },
    getEthBalance (currentBalance) {
      console.log('currentETHbalance', currentBalance)
      let balanceOf = 13160000;
      let currBalance = this.getSerial(currentBalance)
      let balance = balanceOf - currBalance
      this.ethPercentPurchased = 100 * balance / this.ethNewTotalToken;

      return Math.round(balance);
    },
    getMaticBalance (currentBalance) {
      console.log('currentbalanceMatic', currentBalance)
      let balanceOf = this.maticNewTotalToken
      let currBalance = this.getSerial(currentBalance)
      let balance = balanceOf - currBalance
      console.log('BAL', balance)
      this.maticPercentPurchased = 100 * balance / this.maticNewTotalToken;

      return Math.round(balance);
    },
    setDefaultBundle (r) {
      let i;
      let smallB = document.getElementsByClassName('smallB');
      let bigB = document.getElementsByClassName('bigB');
      let mediumB = document.getElementsByClassName('mediumB');

      if (r == 1) {
        for (i = 0; i < smallB.length; i++) {
          smallB[i].style.marginLeft = '35px';
        }
        for (i = 0; i < bigB.length; i++) {
          bigB[i].style.marginLeft = '20px';
        }
        for (i = 0; i < mediumB.length; i++) {
          mediumB[i].style.marginLeft = '50px';
        }
      } else if (r == 0) {
        for (i = 0; i < smallB.length; i++) {
          smallB[i].style.marginLeft = '50px';
        }
        for (i = 0; i < bigB.length; i++) {
          bigB[i].style.marginLeft = '35px';
        }
        for (i = 0; i < mediumB.length; i++) {
          mediumB[i].style.marginLeft = '20px';
        }
      } else if (r == 2) {
        for (i = 0; i < smallB.length; i++) {
          smallB[i].style.marginLeft = '20px';
        }
        for (i = 0; i < bigB.length; i++) {
          bigB[i].style.marginLeft = '50px';
        }
        for (i = 0; i < mediumB.length; i++) {
          mediumB[i].style.marginLeft = '35px';
        }
      }
      // this.addAnimate();
    },
    addAnimate () {
      let i, percentage
      percentage = document.getElementsByClassName('percentage_off');

      for (i = 0; i < percentage.length; i++) {
        percentage[i].classList.add('animate');
      }

      setTimeout(function () {
        for (i = 0; i < percentage.length; i++) {
          percentage[i].classList.remove('animate');
        }
      }, 4000);
    },
    getMaticAmount (numberofBundle, price, factor) {
      let wei = factor * price
      let amount = wei * numberofBundle;
      let finalAmount = amount / 1000000000000000000;
      return finalAmount;
    },
    getSerial (amount) {
      let finalAmount = amount / 1000000000000000000;
      return finalAmount;
    },
    approveTrans () {
      let amount = 10000000000000000000;
      let amt = amount.toString();

      this.drizzleInstance.contracts['WrapEthErc20'].methods[
        'approve'
      ].cacheSend(this.maticEscrowAddress, amt);
    },
    toWei (eth) {
      let weiValue = Web3.utils.toWei(eth, 'ether');
      return weiValue;
    },
    buyEthSmallBundle (numberofBundle, smallPrice) {
      let toWeiBundle = smallPrice * numberofBundle;
      console.log(toWeiBundle);
      this.drizzleInstance.contracts['SolidEscrow'].methods[
        'buySmallBundle'
      ].cacheSend(this.tokenIdEth, {
        value: toWeiBundle,
      });
    },
    buyEthBigBundle (numberofBundle, bigPrice) {
      let toWeiBundle = bigPrice * numberofBundle;
      console.log(toWeiBundle);
      this.drizzleInstance.contracts['SolidEscrow'].methods[
        'buyBigBundle'
      ].cacheSend(this.tokenIdEth, {
        value: toWeiBundle,
      });
    },

    // wrap eth bundle functions
    buyWrapEthSmallBundle (numberofBundle, smallPrice) {
      let amount = smallPrice * numberofBundle;
      let finalAmount = amount.toString();

      this.drizzleInstance.contracts['MaticEscrow'].methods[
        'buySmallBundleEth'
      ].cacheSend(this.tokenIdMatic, this.wrapEthAddress, finalAmount);
    },
    buyWrapEthBigBundle (numberofBundle, bigPrice) {
      let amount = bigPrice * numberofBundle;
      let finalAmount = amount.toString();

      this.drizzleInstance.contracts['MaticEscrow'].methods[
        'buyBigBundleEth'
      ].cacheSend(this.tokenIdMatic, this.wrapEthAddress, finalAmount);
    },
    buyWrapEthMediumBundle (numberofBundle, bigPrice) {
      let amount = bigPrice * numberofBundle;
      let finalAmount = amount.toString();

      this.drizzleInstance.contracts['MaticEscrow'].methods[
        'buyMediumBundleEth'
      ].cacheSend(this.tokenIdMatic, this.wrapEthAddress, finalAmount);
    },

    // matic bundles functions
    buyMaticBigBundle (numberofBundle, bigPrice, factor) {
      let wei = factor * bigPrice
      let amount = wei * numberofBundle;
      let finalAmount = amount.toString();

      this.drizzleInstance.contracts['MaticEscrow'].methods[
        'buyBigBundleMatic'
      ].cacheSend(this.tokenIdMatic, {
        value: finalAmount,
      });
    },
    buyMaticSmallBundle (numberofBundle, smallPrice, factor) {
      let wei = factor * smallPrice
      let amount = wei * numberofBundle;
      let finalAmount = amount.toString();

      this.drizzleInstance.contracts['MaticEscrow'].methods[
        'buySmallBundleMatic'
      ].cacheSend(this.tokenIdMatic, {
        value: finalAmount,
      });
    },
    buyMaticMediumBundle (numberofBundle, smallPrice, factor) {
      let wei = factor * smallPrice
      let amount = wei * numberofBundle;
      let finalAmount = amount.toString();

      this.drizzleInstance.contracts['MaticEscrow'].methods[
        'buyMediumBundleMatic'
      ].cacheSend(this.tokenIdMatic, {
        value: finalAmount,
      });
    },
    checkNetwork (netId) {
      let id = parseInt(netId);
      let networks = [1, 2, 3, 4, 42, 61, 62, 137, 80001];
      if (networks.includes(id)) {
        return true;
      } else {
        // this.errorNotify('top-center', 'danger')
        return false
      }
    },
    getNetworkName (netId) {
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
    copyToClip (text) {
      let self = this;
      let textArea = document.createElement("textarea");
      textArea.value = text;

      textArea.setAttribute('readonly', '');
      textArea.style.position = 'absolute';

      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);

      // textArea.select();
      // textArea.setSelectionRange(0, 99999); /* For mobile devices */
      // document.execCommand("copy");

      // alert("Copied the text: " + text);
      this.clipboard = 'Copied!'

      setTimeout(function () { self.clipboard = 'Copy to clipboard' }, 3000);
    },
    goHome () {
      this.$router.push("/")
    },
    openNotification (position = null, color, title, text) {
      this.$vs.notification({
        sticky: true,
        color,
        position,
        title,
        text,
      });
    },
    connectedNotify (position = null, color) {
      this.$vs.notification({
        progress: 'auto',
        color,
        position,
        title: 'Already Connected.',
        text: `You already connected to a Matic Network`,
      });
    },
    errorNotify (position = null, color) {
      this.$vs.notification({
        color,
        position,
        title: 'Wrong Network.',
        text: `Choose an appropriate network to connect`,
      });
    },
  }
}