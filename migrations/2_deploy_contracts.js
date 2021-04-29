var SolidProtocol = artifacts.require("SolidProtocol");

module.exports = async function (deployer) {
  await deployer.deploy(SolidProtocol);
  const sp = await SolidProtocol.deployed();
};
