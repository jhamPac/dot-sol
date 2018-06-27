const Adoption = artifacts.require("../contracts/Adoption");

module.exports = function(deployer) {
  deployer.deploy(Adoption);
};
