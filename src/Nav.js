import React, { Component } from 'react';
import './App.css';

class Nav extends Component {
    render() {
      return (
    <div class="Navbar">
        <nav class="Navbar__Items">
        <div class="Navbar__Link Navbar__Link-brand">
            Website title
        </div>
        <div class="Navbar__Link">
            Link
        </div>
        <div class="Navbar__Link">
            Link
        </div>
        <div class="Navbar__Link">
            Link
        </div>
        </nav>
        <nav class="Navbar__Items Navbar__Items--right">
        <div class="Navbar__Link">
            Link
        </div>
        <div class="Navbar__Link">
            Link
        </div>
        </nav>
</div>
      );
    }
  }
  
  export default Nav;
