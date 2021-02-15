import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css';


export default class Navbar extends Component {
    render() {
        return (
            <div id="menu-nav">
                <div id="navigation-bar">
                    <ul>
                        <li><Link to="/" className="navbar-brand"><i class="fa fa-home"></i><span> Jokerzon</span></Link></li>
                        <li><Link to="/my-area" className="nav-link"><i class="fa fa-user"></i><span> My Area</span></Link></li>
                        <li><Link to="/shopping" className="nav-link"><i class="fa fa-handshake"></i><span> Shopping</span></Link></li>
                        <li><Link to="/selling" className="nav-link"><i class="fab fa-ethereum"></i><span> Selling</span></Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}