import React, { Component } from 'react';
import './App.css';
import Html from './Image/html.jpg'

class App extends Component {
  render() {
    return (
<div>
      <div className="wrapper">
        <div className="main-text"> Learn the web development essentials</div>
        <div className="hr">  
        </div>
      </div>

      <div className="main-body">
      
      <div classname="imgs">
      <img src={Html} alt="Flowers in Chania"></img>
      </div>

      <div classname="body-text" >Habitasse ante nostra, elementum dignissim fermentum varius vulputate facilisis molestie per nascetur fames. Leo eleifend mauris senectus rutrum nisi molestie. Penatibus nunc tincidunt arcu sagittis conubia. Tempus porttitor phasellus dignissim lobortis non faucibus nisi lobortis nascetur ac parturient. Lobortis cum?
</div>
      
      </div>
</div>

    );
  }
}

export default App;
