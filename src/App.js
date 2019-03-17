import React, { Component } from 'react';
import './App.css';
import Html from './Image/html.jpg'
import CSS from './Image/CSS.jpg'
import JavaScript from './Image/javascript.jpg'

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
<div classname="whole-body">
      <div className="wrapper">
        <div className="main-text">Learn the web development essentials</div>
        <div className="hr">  
=======
      <div classname="whole-body">
        <div className="wrapper">
          <div className="main-text"> Learn the web development essentials</div>
          <div className="hr">
          </div>
>>>>>>> e3cce5cdee92849caf65ec0f8fc13650ef352319
        </div>

        <div className="main-body">

<<<<<<< HEAD
      <p className="body-title">What is <b>HTML</b>?</p>
      
      <div classname="imgs">
      <img className="body-img" src={Html} alt="html image"></img>
      </div>

      <div classname="body-text" > <b>HTML</b> (<b>H</b>yper <b>T</b>ext <b>M</b>arkup <b>L</b>anguage) is the first langauge to know when learning how to create a website. It is the backbone and outline to all websites. When creating a website, HTML pages must be written first in order to create a website. For example, adding text to a website is done with HTML, and changing the size of that text is done with another language called CSS, which I go into further in the next step. 
      W3Schools is the biggest educational platform online for all web technologies. Click  <a href ="https://www.w3schools.com/html/html_intro.asp">here</a> for more information about HTML on W3School's website.  </div>
       
      <div classname="img-2">
      <img className="body-img" src={CSS} alt="css image"></img>
      </div>
=======
          <p className="body-title">What is <b>HTML</b>?</p>

          <div classname="imgs">
            <img src={Html} alt="html image"></img>
          </div>
>>>>>>> e3cce5cdee92849caf65ec0f8fc13650ef352319

          <div classname="body-text" > <b>HTML</b> (<b>H</b>yper <b>T</b>ext <b>M</b>arkup <b>L</b>anguage) is the first langauge to know when learning how to create a website. It is the backbone and outline to all websites. When creating a website, HTML pages must be written first in order to create a website. For example, adding text to a website is done with HTML, and changing the size of that text is done with another language called CSS, which I go into further in the next step.
      W3Schools is the biggest educational platform online for all web technologies. Click<a href="https://www.w3schools.com/html/html_intro.asp">here</a> for more information about HTML on W3School's website.  </div>

<<<<<<< HEAD
      <div classname="img-2">
      <img className="body-img" src={JavaScript} alt="javascript image"></img>
      </div>
=======
          <div classname="img-2">
            <img classname="css-img" src={CSS} alt="css image"></img>
          </div>
>>>>>>> e3cce5cdee92849caf65ec0f8fc13650ef352319

          <div classname="body-text" > <b>CSS</b> (<b>C</b>ascade <b>S</b>tyle <b>S</b>heets)
          </div>

          <div classname="img-2">
            <img src={JavaScript} alt="javascript image"></img>
          </div>

          <div classname="body-text" > <a href="https://www.w3schools.com/html/html_intro.asp" target="_blank" title="w3schools">Click here</a> Habitasse ante nostra, elementum dignissim fermentum varius vulputate facilisis molestie per nascetur fames. Leo eleifend mauris senectus rutrum nisi molestie. Penatibus nunc tincidunt arcu sagittis conubia. Tempus porttitor phasellus dignissim lobortis non faucibus nisi lobortis nascetur ac parturient. Lobortis cum?
      </div>

        </div>

        <div className="hr">
        </div>

      </div>

    );
  }
}

export default App;