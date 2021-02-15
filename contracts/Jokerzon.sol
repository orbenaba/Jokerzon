pragma solidity >=0.4.21 <0.7.5;
pragma experimental ABIEncoderV2;

//There is only one Jokerzon cotract
//contains all the purchases that has been committed
contract Jokerzon {
    uint256 count;
    Product[] public products;
    Purchase[] public purchases;
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
        uint256 productID;
        bool isSold;
    }

    constructor() public {
        count = 0;
    }

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
        newProduct.productID = count++;
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
    /**
     * Purchase section
     */
    struct Purchase {
        string sellerFullName;
        string productName;
        string description;
        uint256 price;
        string city;
        string country;
        uint256 estimatedDays;
        address payable sellerAddress;
        uint256 productID;
        address payable buyerAddress;
        uint256 dateOfPurchase;
    }

    function addPurchase(
        string memory _sellerFullName,
        string memory _productName,
        string memory _description,
        uint256 _price,
        string memory _city,
        string memory _country,
        uint256 _estimatedDays,
        address payable _sellerAddress,
        uint256 _productID
    ) public payable {
        require(
            !checkIfSold(_productID),
            "The product has already been purchased"
        );
        // Validating that all the fields are valid
        require(
            bytes(_sellerFullName).length >= 4 &&
                bytes(_sellerFullName).length <= 20,
            "Seller name must be at least 4 characters and at the most 20"
        );
        require(
            bytes(_productName).length >= 3 && bytes(_productName).length <= 40,
            "product name must be at least 3 characters and at the most 40"
        );
        require(
            bytes(_description).length >= 5 &&
                bytes(_description).length <= 1000,
            "description must be at least 5 characters and at the most 1000"
        );
        require(bytes(_city).length > 0, "city must be at least 0 characters");
        require(
            bytes(_country).length > 0,
            "country must be at least 0 characters"
        );
        require(
            _price > 0 && _price < 1000000,
            "price must be at least 0 and at the most 1000000"
        );
        require(
            _estimatedDays >= 1 && _estimatedDays <= 60,
            "Estimated daus must be at least 1 and at the most 60"
        );
        //Checking if the buyer has enough money to commit for the TX
        require(
            msg.sender.balance >= _price,
            "You've not enough money bruhhh :("
        );

        Purchase memory newPurchase =
            Purchase(
                _sellerFullName,
                _productName,
                _description,
                _price,
                _city,
                _country,
                _estimatedDays,
                _sellerAddress,
                _productID,
                msg.sender,
                block.timestamp
            );
        setSoldById(_productID);
        //The product sold for the buyer, then transfer money [Seller] -> [Buyer]
        purchases.push(newPurchase);
    }

    function getAllPurchases() external view returns (Purchase[] memory) {
        return purchases;
    }

    // Returning the product by the id in Jokerzon contract
    function getProductById(uint256 index)
        external
        view
        returns (Product memory)
    {
        require(index >= 0 && index <= products.length - 1);
        return products[index];
    }

    function setSoldById(uint256 index) internal {
        require(index >= 0 && index <= products.length - 1);
        products[index].isSold = true;
    }

    function checkIfSold(uint256 index) internal view returns (bool) {
        require(index >= 0 && index <= products.length - 1);
        return products[index].isSold;
    }
}
