import React from 'react';
import PropTypes from 'prop-types';

const Slider = ({ color, sliding }) => (
  <input
    key={color}
    type="range"
    min="0"
    max="255"
    onChange={sliding}
  />
);

Slider.propTypes = {
  color: PropTypes.string.isRequired,
  sliding: PropTypes.func.isRequired,
};

export default Slider;
