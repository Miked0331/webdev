import React, { Component } from 'react';
import './App.css';
import Html from './Image/html.jpg'
import CSS from './Image/CSS.jpg'
import JavaScript from './Image/javascript.jpg'

class App extends Component {
  showAlert() {
    alert("This is why we use JavaScript!");
  }
  render() {
    return (
      <div classname="whole-body">
        <div className="wrapper">
          <div className="main-text">Learn the web development essentials</div>
          <div className="hr">
          </div>
        </div>

        <div className="main-body">

          <p className="body-title">3 <b>beginner</b> languages.</p>

          <div className="imgs">
            <img className="body-img" src={Html} alt="html image"></img>
          </div>

          <div classname="body-text" > <b>HTML</b> (<b>H</b>yper <b>T</b>ext <b>M</b>arkup <b>L</b>anguage) is the first langauge to know when learning how to create a website. It is the backbone and outline to all websites. When creating a website, HTML pages must be written first in order to create a website. For example, adding text to a website is done with HTML, and changing the size of that text is done with another language called CSS, which I go into further in the next step.
      W3Schools is the biggest educational platform online for all web technologies. Click <a href="https://www.w3schools.com/html/html_intro.asp">here</a> for more information about HTML on W3School's website.  </div>
          <div classname="body-text" ><p> <b>HTML</b> (<b>H</b>yper <b>T</b>ext <b>M</b>arkup <b>L</b>anguage) is the first
          langauge to know when learning how to create a website. It is the backbone and outline to all websites. When creating
          a website, HTML pages must be written first in order to create a website. For example, adding text to a website is done
          with HTML, and changing the size of that text is done with another language called CSS, which I go into further in the next step.
          W3Schools is the biggest educational platform online for all web technologies.
      Click  <a href="https://www.w3schools.com/html/html_intro.asp" target="_blank">here</a> for more information about HTML on W3School's website. </p> </div>

          <div classname="imgs">

            <img className="body-img" src={CSS} alt="css image"></img>
          </div>
          <div className="body-text" > <p><b>CSS</b> (<b>C</b>ascade <b>S</b>tyle <b>S</b>heets) is a style sheet langauge that allows languages
          like HTML to be described and identified. CSS is allows us to change properties like color, size, animations, and much more when changing
          properties on images, text, and all other attributes on a website. For example, 'this text is plain html with no CSS definition'
          <p className="example">'this text is defined and styled with CSS.'</p> For more information on CSS, W3Schools has a wide variety of information
          on their website. Click <a href="https://www.w3schools.com/css/css_intro.asp" target="_blank">here</a> for more information about CSS on W3School's website. </p>
          </div>

          <div className="imgs">
            <img className="body-img" src={JavaScript} alt="javascript image"></img>
          </div>
          <div classname="body-text" > <b>J</b>ava<b>S</b>cript is the third essential langauge to learn when studying web development. This is how
          we are able to create functionality within a website. Without JavaScript, components like forms, special animations, and much more would not
          function without JavaScript. Other items like buttons use JavaScript so they can function. For example <button className="button" onClick={this.showAlert}>This</button> button
          displays an alert message on the page. For more information about JavaScript visit another section on W3School's website <a href="https://www.w3schools.com/js/js_intro.asp" target="_blank">here</a>. </div>
        </div>
        <div className="hr">
        </div>
      </div>
    );
  }
}

export default App;

