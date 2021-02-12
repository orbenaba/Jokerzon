import React, { Component } from "react";

import JokerzonContract from "./contracts/Jokerzon.json";

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
        deployedNetwork && deployedNetwork.address
      );


      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  render() {
    if (!this.state.web3) {
      return <div>Please connect your Meta-Mask Wallet</div>;
    }
    console.log("this.state.accounts[0] = ",this.state.accounts[0],"\n --- - - --- --- --- --- ---");

    return (
      <div>
          <Router>
              <Navbar></Navbar>
              <Route exact path="/" component={() => <Jokerzon jokerzonContract={this.state.contract}/>}></Route>
              <Route path="/shopping" component={Shopping}></Route>
              <Route path="/selling" component={() => <Checkout jokerzonContract={this.state.contract} myAccount={this.state.accounts[0]}/>}></Route>
          </Router>
      </div>
    );
  }
}

export default App;