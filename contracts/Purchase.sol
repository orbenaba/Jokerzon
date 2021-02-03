pragma solidity >=0.4.21 <0.7.5;
import "./Product.sol";

contract Purchase {
    address public buyer;
    mapping(id => Product.Item) public products;
    uint256 tempBalance;

    constructor() {
        buyer = msg.sender;
        tempBalance = msg.sender.balance;
    }

    //Returns false in case the buyer has no enough money
    function addProduct(
        string memory _name,
        string memory _description,
        uint256 _publishedDate,
        uint256 _price,
        address seller
    ) public returns (bool) {
        if (tempBalance < _price) {
            return false;
        }

        products[seller] = Product.Item(
            _name,
            _description,
            _publishedDate,
            _price
        );
        tempBalance -= _price;
        return true;
    }

    function removeProduct(address seller, uint256 price) public {
        delete (products[seller]);
        tempBalance += price;
    }

    function commitShopping() public {}
}
