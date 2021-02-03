pragma solidity >=0.4.21 <=0.7.4;

/**
    The seller uses a contract and wants to sell it to a buyer
 */

contract Product {
    struct Item {
        string name;
        string description;
        uint256 publishedDate;
        uint256 price;
        //image img;
    }
    Item public item;

    address public owner;

    //Date is given right after the contract has been created
    constructor(
        string memory _name,
        string memory _description,
        uint256 price
    ) {
        requireAll(_name, _description, price);
        item = Item(_name, _description, block.timestamp, price);
        owner = msg.sender;
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
}
