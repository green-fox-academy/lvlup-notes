import React from 'react';
import SliderContainer from './SliderContainer';
import DisplayContainer from './DisplayContainer';

const App = () => (
  <div className="App">
    <SliderContainer color="r" />
    <SliderContainer color="g" />
    <SliderContainer color="b" />
    <DisplayContainer />
  </div>
);

export default App;
