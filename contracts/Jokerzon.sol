pragma solidity >=0.4.21 <0.7.5;
import "./Purchase.sol";

//contains all the purchases that has been committed
contract Jokerzon {
    Purchase[] public purchases;

    function addPurchase(Purchase _purchase) public {
        purchases.push(_purchase);
    }

    function readPurchaseContract(uint256 _index)
        public
        view
        returns (address payable, Product)
    {
        return Purchase(purchases[_index]).returnData();
    }

    // ToDo: return all the purchases of one customer
    // ToDo: return all the sales of one seller
}
