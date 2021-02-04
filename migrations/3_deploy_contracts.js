var Product = artifacts.require("./Product.sol");


module.exports = function(deployer){
    deployer.deploy(Product, "Clothes", "Nike short", 300);
}