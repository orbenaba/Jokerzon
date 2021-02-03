pragma solidity >=0.4.21 <0.7.5;
import "./Product.sol";

contract Purchase {
    address public buyer;
    ///////////////////////////////
    Product.Item[] public items;
    address payable[] public addresses;
    ///////////////////////////////
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
        address payable seller
    ) public returns (bool) {
        if (tempBalance < _price) {
            return false;
        }

        items.push(Product.Item(_name, _description, _publishedDate, _price));
        addresses.push(seller);
        tempBalance -= _price;
        return true;
    }

    /*
    function removeProduct(address seller, uint price)public{
        remove()
        tempBalance += price;
    }*/

    //Transfer all the money to all the sellers
    function commitShopping() public {
        for (uint256 i = 0; i < items.length; i++) {
            addresses[i].transfer(items[i].price);
        }
    }

    /*
    function remove(uint index) public returns(uint[]) {
        if (index >= items.length) return;

        for (uint i = index; i<items.length-1; i++){
            items[i] = items[i+1];
            addresses[i] = addresses[i+1];
        }
        delete items[items.length-1];
        delete addresses[addresses.length-1];
        items.length--;
        addresses.length--;
        return items;
    }*/
}
