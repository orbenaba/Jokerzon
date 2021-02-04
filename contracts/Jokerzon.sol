pragma solidity >=0.4.21 <0.7.5;
import "./Purchase.sol";

//contains all the purchases that has been committed
contract Jokerzon {
    Purchase[] public purchases;

    function addPurchase(
        address payable _buyer,
        address payable _seller,
        string memory _name,
        string memory _description,
        uint256 _price
    ) public {
        purchases.push(
            new Purchase(_name, _description, _price, _seller, _buyer)
        );
    }

    function readPurchaseContract(uint256 _index)
        public
        view
        returns (address payable, Product)
    {
        return Purchase(purchases[_index]).returnData();
    }
}
