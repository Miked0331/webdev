import React, { Component } from 'react';
import './App.css';
import GitHub from './Image/github.png'
import Linkedin from './Image/linkedin.png'

class Footer extends Component {
      render() {
            return (
                  <div className="main-footer">

                        <div className="footer-div">
                              <a href="https://github.com/Miked0331" target="_blank" title="GitHub">
                                    <img className="footer-icon" src={GitHub} alt="GitHub"></img></a>
                        </div>

                        <div className="footer-div">Contact me @ mikedragun@gmail.com </div>

                        <div className="footer-div">
                              <a href="https://www.linkedin.com/in/michael-dragun-42b925137/" target="_blank" title="LinkedIn">
                                    <img className="footer-icon" src={Linkedin} alt="LinkedIn"></img></a>
                        </div>

                  </div>
            )
      }
}


export default Footer