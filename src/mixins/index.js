export default {
  methods: {

    openCity(evt, cityName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
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
      var textArea = document.createElement("textarea");
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
        title: 'Wrong Network.(LocalHost)',
        text: `Choose an appropriate network to connect`,
      });
    },
  }
}