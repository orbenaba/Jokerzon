import React, { Component } from "react";

import JokerzonContract from "./contracts/Jokerzon.json";
import ProductContract from "./contracts/Product.json";
import PurchaseContract from "./contracts/Purchase.json";

import getWeb3 from "./getWeb3";
import {BrowserRouter as Router,Route} from "react-router-dom";


import "./App.css";


import Checkout from "./components/Selling/Checkout";



import Jokerzon from "./components/Jokerzon/Home";
import Shopping from "./components/Shopping/Shopping";
import Navbar from "./components/Navbar/Navbar.jsx";


class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

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
        deployedNetwork && deployedNetwork.address,
      );
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    /*
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });*/
  };

  render() {
    if (!this.state.web3) {
      return <div>Please connect your Meta-Mask Wallet</div>;
    }
    console.log("this.state.contract = ",this.state.contract);
    return (
      <div>
          <Router>
              <Navbar></Navbar>
              <Route path="/" render={props => <Jokerzon jokerzonContract={this.state.contract}/>}></Route>
              <Route path="/shopping" component={Shopping}></Route>
              <Route path="/selling" component={Checkout}></Route>
          </Router>
      </div>
    );
  }
}

export default App;