import Web3 from 'web3';

const getWeb3 = () => new Promise((resolve) => {
  window.addEventListener('load', () => {
    let currentWeb3;

    if (window.ethereum) {
      currentWeb3 = new Web3(window.ethereum);
      try {
        // Request account access if needed
        window.ethereum.enable();
        // Acccounts now exposed
        resolve(currentWeb3);
      } catch (error) {
        // User denied account access...
        alert('Please allow access for the app to work');
      }
    } else {
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  });
});


export default getWeb3;