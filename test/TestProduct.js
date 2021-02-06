var Product = artifacts.require("./Product.sol");

const Web3 = require("web3");
const web3 = new Web3('HTTP://127.0.0.1:7545');

contract("Product", function(accounts){
    var productInstance;

    it("Tests a normal product", async()=>{
        productInstance = await new web3.eth.Contract("chair", "comfortable chair made by cotton", 1000)
                                       .deploy();

      //  productInstance = await Product.new("chair", "comfortable chair made by cotton", 1000);
        var _price = await productInstance.getPrice();
        var _name = await productInstance.getName();
        var _description = await productInstance.getDescription();
        var _seller = await productInstance.getSellerAddress();
        assert.equal(_price, 1000);
        assert.equal(_name, "chair");
        assert.equal(_description, "comfortable chair made by cotton");
        assert.equal(accounts[0], _seller);
    })

    it("Broken product with negative price", async()=>{
            return Product.new("Table","Italic table made by carbon fiber", -100)
            .then(assert.fail).catch((error)=>{
                assert(error.message.indexOf('out-of-bounds') >= 0, "Error must contain \'out-of-bounds\'")
            });
    })

    it("Broken Product with no name",async()=>{
        return Product.new("","Some product",1000)
        .then(assert.fail).catch((error)=>{
            assert(error.message.indexOf('revert' >= 0, "Error must contain \'revert\'"))
        })
    })

    
    it("Broken Product with no description",async()=>{
        return Product.new("Product","",1000)
        .then(assert.fail).catch((error)=>{
            assert(error.message.indexOf('revert' >= 0, "Error must contain \'revert\'"))
        })
    })
    /*var productInstance;

    it("Initializes a normal product", function(){
        return Product.deployed("chair", "comfortable chair made by cotton", 1000)
        .then(function(instance){
            console.log("HI\n".repeat(1000));
            productInstance = instance;
            return productInstance.getPrice();
        }).then(function(price){
            assert.equal(price.toNumber(),1000, "contains the correct price");
            return productInstance.getName();
        }).then(function(name){
            assert.equal(name.toString(), "chair", "contains the correct name");
            return productInstance.getDescription();
        }).then(function(description){
            assert.equal(description.toString(),"comfortable chair made by cotton", "contains the correct description");
        })
    })*/
})