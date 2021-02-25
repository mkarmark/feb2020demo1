import React from 'react';
import './App.css';

class Puppies extends React.Component {
  render() {
    var min = 1;
    var max = 4;
    var rand =  Math.floor(min + (Math.random() * (max-min)));
    var imgLocation = "/puppies/puppy" + rand + ".jpg";
    return (
    <div className="App">
      <header className="App-header">
      <h1>Random puppy image!</h1>
      <br/>
      <img src={imgLocation} alt="Puppy!" />
      </header>
    </div>
    )
  }
}

export default Puppies
