const BigNumber = artifacts.require("BigNumber");
const BigNumberTest = artifacts.require("BigNumberTest");

module.exports = function (deployer) {
  return BigNumber
    .deployed((bnLib) => {
      return deployer.link(bnLib, BigNumberTest);
    })
    .then(() => {
      return deployer.deploy(BigNumberTest);
    })
};
