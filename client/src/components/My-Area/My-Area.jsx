import React, { Component } from "react";


import {Switch, BrowserRouter as Router,Route} from "react-router-dom";

import Sold from "./Sold/Sold";
import Bought from "./Bought/Bought";


export default function MyArea() {
    return (
        <Router>
            <Switch>
                <Route exact path="/my-area/sold" component={Sold}></Route>
                <Route exact path="/my-area/bought" component={Bought}></Route>
            </Switch>
        </Router>
    )
}