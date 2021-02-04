pragma solidity >=0.4.21 <0.7.5;
pragma experimental ABIEncoderV2;
import "./Product.sol";

contract Purchase {
    address payable public buyer;
    Product public product;

    constructor(
        string memory _name,
        string memory _description,
        uint256 _price,
        address payable _seller,
        address payable _buyer
    ) {
        buyer = _buyer;
        product = new Product(_name, _description, _price, _seller);
    }

    function returnData() public view returns (address payable, Product) {
        return (buyer, product);
    }
}
