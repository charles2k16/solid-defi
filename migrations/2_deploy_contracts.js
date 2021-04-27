var LockedWallets = artifacts.require("LockedWallets");

module.exports = function (deployer) {
  deployer.deploy(LockedWallets);
};
