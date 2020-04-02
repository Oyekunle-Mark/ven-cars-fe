import React from 'react';
import Prop from 'prop-types';

const Country = ({ country }) => <span>{country}</span>;

Country.propTypes = {
  country: Prop.string.isRequired,
};

export default Country;
