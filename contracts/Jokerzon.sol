pragma solidity >=0.4.21 <0.7.5;
pragma experimental ABIEncoderV2;

//There is only one Jokerzon cotract
//contains all the purchases that has been committed
contract Jokerzon {
    /**
     * Product section
     */
    // The product seller is msg.sender
    // The product is not yet sold
    struct Product {
        string sellerFullName;
        string productName;
        string description;
        uint256 price;
        string city;
        string country;
        uint256 estimatedDays;
        address payable sellerAddress;
        bool isSold;
    }

    Product[] public products;

    constructor() public {}

    function addProduct(
        string memory _sellerFullName,
        string memory _productName,
        string memory _description,
        uint256 _price,
        string memory _city,
        string memory _country,
        uint256 _estimatedDays
    ) public returns (Product memory) {
        // Validating that all the fields are valid
        require(
            bytes(_sellerFullName).length >= 4 &&
                bytes(_sellerFullName).length <= 20
        );
        require(
            bytes(_productName).length >= 3 && bytes(_productName).length <= 40
        );
        require(
            bytes(_description).length >= 5 &&
                bytes(_description).length <= 1000
        );
        require(bytes(_city).length > 0);
        require(bytes(_country).length > 0);
        require(_price > 0 && _price < 1000000);
        require(_estimatedDays >= 1 && _estimatedDays <= 60);
        // Creating the new product after being validated
        Product memory newProduct;
        newProduct.sellerFullName = _sellerFullName;
        newProduct.productName = _productName;
        newProduct.description = _description;
        newProduct.price = _price;
        newProduct.city = _city;
        newProduct.country = _country;
        newProduct.estimatedDays = _estimatedDays;
        newProduct.sellerAddress = msg.sender;
        newProduct.isSold = false;
        products.push(newProduct);
        return newProduct;
    }

    function totalProducts() public view returns (uint32) {
        return (uint32)(products.length);
    }

    // Returns all the prouducts in the jokerzon contract
    function getAllProducts() external view returns (Product[] memory) {
        return products;
    }

    /**
     * Product section
     */
}
