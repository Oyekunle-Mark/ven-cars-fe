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
  indigo: '#4b0082',
  turquoise: '#40E0D0',
  crimson: '#dc143c',
  purple: '#800080',
  khaki: '#c3b091',
  fuscia: ' #FF00FF',
  puce: '#CC8899',
};

const Color = ({ color }) => {
  const colorStyle = {
    backgroundColor: colorMap[color.toLowerCase()],
    width: 15,
    height: 15,
    borderRadius: '50%',
    marginRight: 2,
    marginLeft: 2,
  };

  return <span style={colorStyle}></span>;
};

Color.propTypes = {
  color: Prop.string.isRequired,
};

export default Color;
