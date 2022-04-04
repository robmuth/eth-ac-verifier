const BigNumber = artifacts.require("BigNumber");

module.exports = function (deployer) {
  deployer.deploy(BigNumber);
};
