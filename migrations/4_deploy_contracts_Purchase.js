var Purchase = artifacts.require("./Purchase.sol");
var Product = artifacts.require("./Product.sol");

module.exports = function(deployer){
    deployer.deploy(Purchase/*, Product("moshe", "moshe is moshe", 1000)*/);
}