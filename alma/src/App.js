import React, { Component } from 'react';
import Sliders from './components/Sliders';
import Display from './components/Display';

class App extends Component {
  constructor(props) {
    super(props);
    this.sliding = this.sliding.bind(this);
    this.state = {
      r: '0',
      g: '0',
      b: '0',
    };
  }

  sliding(color) {
    return (event) => {
      const newValue = event.target.value; 
      this.setState((state) => {
        const tempState = state;
        tempState[color] = newValue;
        return tempState;
      });
    };
  }

  render() {
    const { r, g, b } = this.state;
    return (
      <div className="App">
        <Sliders sliding={this.sliding} colors={['r', 'g', 'b']} />
        <Display colors={{ r, g, b }} />
      </div>
    );
  }
}

export default App;
