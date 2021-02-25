import React from 'react';
import './App.css';

class Puppies extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var min = 1;
    var max = 4;
    var rand =  min + (Math.random() * (max-min));
    var imgLocation = "/puppies/puppy" + rand + ".jpg";
    return (
    <div className="App">
      <header className="App-header">
      <h1>Random puppy image!</h1>
      <br/>
      <img src={imgLocation} />
      </header>
    </div>
    )
  }
}

export default Puppies
