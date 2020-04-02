import React from 'react';
import Prop from 'prop-types';

const Country = ({ country }) => <div>{country}</div>;

Country.propTypes = {
  country: Prop.string.isRequired,
};

export default Country;
