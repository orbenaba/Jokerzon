pragma solidity >=0.4.21 <0.7.5;
import "./Purchase.sol";
import "./Product.sol";

//There is only one Jokerzon cotract
//contains all the purchases that has been committed
contract Jokerzon {
    Purchase[] public purchases;
    Product[] public products;

    constructor() public {}

    function addProduct(
        string calldata _sellerFullName,
        string calldata _productName,
        string calldata _description,
        uint256 _price,
        string calldata _city,
        string calldata _country,
        uint256 _estimatedDays
    ) external returns (Product) {
        Product p =
            new Product(
                _sellerFullName,
                _productName,
                _description,
                _price,
                "s",
                "S",
                1
            );
        //Cause of error which points on stack error, we need to decrease the amount of parameters in the called functions
        p.setCity(_city);
        p.setCountry(_country);
        p.setEstimatedDays(_estimatedDays);
        products.push(p);
        return p;
    }

    //Add the purchase receipt to the Purchase list
    function addPurchase(Purchase _purchase) public {
        purchases.push(_purchase);
    }

    function totalProducts() public view returns (uint32) {
        return (uint32)(products.length);
    }

    function totalPurchases() public view returns (uint32) {
        return (uint32)(purchases.length);
    }

    // Returns all the prouducts in the jokerzon contract
    function getAllProducts() external view returns (Product[] memory) {
        return products;
    }

    // ToDo: return all the purchases of one customer
    // ToDo: return all the sales of one seller
}
