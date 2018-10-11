import React from 'react';
import PropTypes from 'prop-types';

const getStyle = config => ({
  background: `rgb(${config.r}, ${config.g}, ${config.b})`,
  height: '100vh',
});

const Display = ({ colors }) => (
  <div style={getStyle(colors)} />
);

Display.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Display;
