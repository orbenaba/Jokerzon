pragma solidity >=0.4.21 <0.7.5;
pragma experimental ABIEncoderV2;

//There is only one Jokerzon cotract
//contains all the purchases that has been committed
contract Jokerzon {
    uint256 count;
    Product[] public products;
    Purchase[]public purchases;
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
        newProduct.productID = count ++;
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
    struct Purchase{
        Product product;
        address payable buyer;
        string buyerFullName;
        uint256 dateOfPurchase;
    }
    function addPurchase(Product memory _product, string memory _buyerFullName) public returns(Purchase memory){
        // Validating that all the fields are valid
        require(
            bytes(_buyerFullName).length >= 4 &&
                bytes(_buyerFullName).length <= 20
        );        
        //Checking if the item was already sold
        require(_product.isSold == false, "Product already sold");
        //Checking if the buyer has enough money to commit for the TX
        require(
            msg.sender.balance >= _product.price,
            "You've not enough money bruhhh :("
        );

        Purchase memory newPurchase;
        newPurchase.product = _product;
        newPurchase.buyer = msg.sender;
        newPurchase.dateOfPurchase = block.timestamp;
        newPurchase.buyerFullName = _buyerFullName;
        _product.isSold = true;
        //The product sold for the buyer, then transfer money [Seller] -> [Buyer]
        _product.sellerAddress.transfer(_product.price);
        purchases.push(newPurchase);
        return newPurchase;
    }

    function getAllPurchases()external view returns(Purchase[]memory){
        return purchases;
    }
}