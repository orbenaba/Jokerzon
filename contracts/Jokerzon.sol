pragma solidity >=0.4.21 <0.7.5;
import "./Purchase.sol";
import "./Product.sol";

//There is only one Jokerzon cotract
//contains all the purchases that has been committed
contract Jokerzon {
    Purchase[] public purchases;
    Product[] public products;

    constructor() public {}

    function addProduct(Product _product) public {
        products.push(_product);
    }

    //Add the purchase receipt to the Purchase list
    function addPurchase(Purchase _purchase) public {
        purchases.push(_purchase);
    }

    // ToDo: return all the purchases of one customer
    // ToDo: return all the sales of one seller
}
