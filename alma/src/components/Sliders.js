import React from 'react';

const Sliders = props => props.colors.map(color => (
  <input
    key={color}
    type="range"
    min="0"
    max="255"
    onChange={props.sliding(color)}
  />
));

export default Sliders;
