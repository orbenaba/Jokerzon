pragma solidity >=0.4.21 <0.7.5;
pragma experimental ABIEncoderV2;
import "./Product.sol";

contract Purchase {
    Product public product;
    address payable public buyer;

    constructor(Product _product) {
        product = _product;
        buyer = msg.sender;
    }

    //Transfer the money between the seller and the buyer
    function commitPurchase() public {
        product.getSellerAddress().transfer(product.getPrice());
    }

    function returnData() public view returns (address payable, Product) {
        return (buyer, product);
    }
}
