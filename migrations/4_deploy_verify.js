const BigNumber = artifacts.require("BigNumber");
const Verify = artifacts.require("Verify");

module.exports = function (deployer) {
  return BigNumber
    .deployed((bnLib) => {
      return deployer.link(bnLib, Verify);
    })
    .then(() => {
      return deployer.deploy(Verify);
    })
};
