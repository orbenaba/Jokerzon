pragma solidity >=0.4.21 <=0.7.4;

/**
    Product contract is created when the seller offers it for sale
 */

contract Product {
    struct Item {
        string name;
        string description;
        uint256 publishedDate;
        uint256 price;
    }
    Item public item;

    address payable public seller;

    //Date is given right after the contract has been created
    constructor(
        string memory _name,
        string memory _description,
        uint256 _price
    ) public {
        requireAll(_name, _description, _price);
        item = Item(_name, _description, block.timestamp, _price);
        seller = msg.sender;
    }

    //Saving smell code, all the fields must be validated, so I created a function :-)
    function requireAll(
        string memory _name,
        string memory _description,
        uint256 price
    ) public pure {
        require(bytes(_name).length != 0);
        require(bytes(_description).length != 0);
        require(price > 0);
    }

    function getPrice() public view returns (uint256) {
        return item.price;
    }

    function getSellerAddress() public view returns (address payable) {
        return seller;
    }
}
