import React, { Component } from 'react';
import './App.css';
import GitHub from './Image/github.png'

class Footer extends Component {
    render() {
      return (
<div className="main-footer">

<div className="footer-text">Contact me @ mikedragun@gmail.com </div>

<div className="footer-icon">
<a href="https://github.com/Miked0331" target="_blank" title="GitHub">
<img src={GitHub} alt="Flowers in Chania"></img></a>
</div>

</div>
      )}}


      export default Footer