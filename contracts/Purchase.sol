pragma solidity >=0.4.21 <0.7.5;
import "./Product.sol";

contract Purchase {
    Product public product;
    address payable public buyer;

    constructor(Product _product) public {
        product = _product;
        buyer = msg.sender;
    }

    //Transfer the money between the seller and the buyer
    function commitPurchase() public {
        product.getSellerAddress().transfer(product.getPrice());
    }

    function returnData()
        public
        view
        returns (
            bool /*
            address payable,
            string memory,
            string memory,
            uint256,
            address payable*/
        )
    {
        return (
            true
            /*buyer,
            product.getName(),
            product.getDescription(),
            product.getPrice(),
            product.getSellerAddress()*/
        );
    }
}
