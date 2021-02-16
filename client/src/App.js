import React, { Component } from "react";

import JokerzonContract from "./contracts/Jokerzon.json";

import getWeb3 from "./getWeb3";
import {Switch, BrowserRouter as Router,Route} from "react-router-dom";


import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


import Checkout from "./components/Selling/Checkout";
import Jokerzon from "./components/Jokerzon/Home";
import Shopping from "./components/Shopping/Shopping";
import Navbar from "./components/Navbar/Navbar.jsx";
import Default from "./components/Default/Default.jsx";
import Spinner from "./components/Shared/Spinner";
import Details from "./components/Shopping/Details/Details";
import MyArea from "./components/My-Area/MyArea/MyArea";




import Bought from "./components/My-Area/Bought/Bought";
import Sold from "./components/My-Area/Sold/Sold";

import getMyPurchases from "./Helper/getMyPurchases";
import getMyProducts from "./Helper/getMyProducts";


class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null, isLoading: true, products:[], purchases:[], fullName:"", myPurchases:{} };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = JokerzonContract.networks[networkId];
        const instance = new web3.eth.Contract(
          JokerzonContract.abi,
          deployedNetwork && deployedNetwork.address
      );

      let allProducts = await instance.methods.getAllProducts().call();
      let allPurchases = await instance.methods.getAllPurchases().call();
      let fullName = await instance.methods.getFullName(accounts[0]).call();
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance, isLoading: false, products:allProducts, purchases:allPurchases, fullName:fullName, myPurchases: getMyPurchases(allPurchases, accounts[0])});

    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        error
       // `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  render() {
    if (!this.state.web3) {
      return <div>Please connect your Meta-Mask Wallet</div>;
    }
    if(this.state.isLoading === true){
      return <Spinner></Spinner>
    }
    else{
      return (
        <div>
            <Router>

                <Navbar></Navbar>

                <Switch>
                    <Route exact path="/" component={() => <Jokerzon address={this.state.contract._address}/>}></Route>
                    <Route exact path="/shopping" component={() => <Shopping jokerzonContract={this.state.contract} myAccount={this.state.accounts[0]}/>}></Route>
                    <Route exact path="/selling" component={() => <Checkout jokerzonContract={this.state.contract} myAccount={this.state.accounts[0]}/>}></Route>
                    <Route path='/shopping/details/:id' component={() => <Details jokerzonContract={this.state.contract} myAccount={this.state.accounts[0]} web3={this.state.web3}/>}></Route>
                    
                    <Route exact path="/my-area/sold" component={()=> <Sold purchases={this.state.myPurchases.mySold}></Sold>}></Route>
                    <Route exact path="/my-area/bought" component={()=><Bought purchases={this.state.myPurchases.myBought}></Bought>}></Route>

                    <Route exact path="/my-area" component={() => <MyArea fullName={this.state.fullName} myPurchases={this.state.myPurchases} myProducts={getMyProducts(this.state.products, this.state.accounts[0])} myAccount={this.state.accounts[0]}/>}></Route>
                    <Route component={Default}></Route>
                </Switch>
            </Router>
        </div>
      );
        
    }
  }
}

export default App; 