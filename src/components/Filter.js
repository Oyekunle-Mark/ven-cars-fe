import React from 'react';
import Prop from 'prop-types';
import { v4 } from 'uuid';

import Country from './Country';

const Filter = ({ start_year, end_year, gender, countries, colors }) => {
  const countryList = countries.split(',');
  const colorList = colors.split(',');

  return (
    <div>
      <h3>
        {start_year} - {end_year}
      </h3>
      <p>{gender}</p>
      <div>
        {countryList.map(country => (
          <Country key={v4()} country={country} />
        ))}
      </div>
      <div>
        {colorList.map(color => (
          <span key={v4()}>{color}</span>
        ))}
      </div>
    </div>
  );
};

Filter.propTypes = {
  start_year: Prop.number.isRequired,
  end_year: Prop.number.isRequired,
  gender: Prop.string.isRequired,
  colors: Prop.string.isRequired,
  countries: Prop.string.isRequired,
};

export default Filter;
