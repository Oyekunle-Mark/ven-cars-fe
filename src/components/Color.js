import React from 'react';
import Prop from 'prop-types';

const colorMap = {
  green: '#50af55',
  violet: '#9c2fae',
  yellow: '#fcc12f',
  blue: '#4153af',
  teal: '#12807f',
  maroon: '#ad3260',
  red: '#ec2b26',
  aquamarine: '#84fed5',
  orange: '#fb572f',
  mauv: '#b685a5',
};

const Color = ({ color }) => <span>{color}</span>;

Color.propTypes = {
  color: Prop.string.isRequired,
};

export default Color;
