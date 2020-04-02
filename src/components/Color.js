import React from 'react';
import Prop from 'prop-types';

const Color = ({ color }) => <span>{color}</span>;

Color.propTypes = {
  color: Prop.string.isRequired,
};

export default Color;
