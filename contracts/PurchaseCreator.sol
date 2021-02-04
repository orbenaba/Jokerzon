pragma solidity >=0.4.21 <0.7.5;

import "./Purchase.sol";

contract PurchaseCreator {
    // Validate the purchase and returns success or not - Like a factory DP
    function checkAndCreate(Product _product) public returns (Purchase) {
        // Checks wheter the buyer has enough money to buy the product
        require(msg.sender.balance >= _product.getPrice());
        return new Purchase(_product);
    }
}
