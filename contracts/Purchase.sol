pragma solidity >=0.4.21 <0.7.5;
import "./Product.sol";

contract Purchase {
    Product product;
    address payable buyer;
    string buyerFullName;
    uint256 purchaseDate;

    constructor(Product _product, string memory _buyerFullName) public {
        //Checking if the item was already sold
        require(_product.getIsSold() == false, "Product already sold");
        //Checking if the buyer has enough money to commit for the TX
        require(
            msg.sender.balance >= _product.getPrice(),
            "You've not enough money bruhhh :("
        );
        product = _product;
        buyer = msg.sender;
        buyerFullName = _buyerFullName;
        purchaseDate = block.timestamp;

        //The product sold for the buyer, then transfer money [Seller] -> [Buyer]
        product.setIsSold();
        product.getSellerAddress().transfer(product.getPrice());
    }
}
