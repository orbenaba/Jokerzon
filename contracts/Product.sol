pragma solidity >=0.4.21 <=0.7.4;
pragma experimental ABIEncoderV2;

/**
    Product contract is created when the seller offers it for sale
 */

contract Product {
    string sellerFullName;
    string productName;
    string description;
    uint256 price;
    string city;
    string country;
    uint256 estimatedDays;

    address payable sellerAddress;
    bool isSold;

    constructor(
        string memory _sellerFullName,
        string memory _productName,
        string memory _description,
        uint256 _price,
        string memory _city,
        string memory _country,
        uint256 _estimatedDays
    ) public {
        requireAllFields(
            _sellerFullName,
            _productName,
            _description,
            _price,
            _city,
            _country,
            _estimatedDays
        );
        sellerFullName = _sellerFullName;
        productName = _productName;
        description = _description;
        price = _price;
        city = _city;
        country = _country;
        estimatedDays = _estimatedDays;
        sellerAddress = msg.sender;
        isSold = false;
    }

    function requireAllFields(
        string memory _sellerFullName,
        string memory _productName,
        string memory _description,
        uint256 _price,
        string memory _city,
        string memory _country,
        uint256 _estimatedDays
    ) public pure {
        uint256 sellerFullNameLength = bytes(_sellerFullName).length;
        uint256 productNameLength = bytes(_productName).length;
        uint256 descriptionLength = bytes(_description).length;
        uint256 cityLength = bytes(_city).length;
        uint256 countryLength = bytes(_country).length;
        require(sellerFullNameLength >= 4 && sellerFullNameLength <= 20);
        require(productNameLength >= 3 && productNameLength <= 40);
        require(descriptionLength >= 5 && descriptionLength <= 1000);
        require(cityLength > 0);
        require(countryLength > 0);
        require(_price > 0 && _price < 1000000);
        require(_estimatedDays >= 1 && _estimatedDays <= 60);
    }

    function setIsSold() public {
        isSold = !isSold;
    }

    function getPrice() public returns (uint256) {
        return price;
    }

    function getSellerAddress() public returns (address payable) {
        return sellerAddress;
    }

    function getIsSold() public returns (bool) {
        return isSold;
    }
}
