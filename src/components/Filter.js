import React from 'react';
import Prop from 'prop-types';
import { v4 } from 'uuid';
import styled from 'styled-components';

import Country from './Country';
import Color from './Color';

const StyledFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  padding: 20px;
  margin-bottom: 10px;

  h3 {
    font-size: 24px;
    font-weight: bold;
  }
`;

const Filter = ({ start_year, end_year, gender, countries, colors }) => {
  const countryList = countries.split(',');
  const colorList = colors.split(',');

  return (
    <StyledFilter>
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
          <Color key={v4()} color={color} />
        ))}
      </div>
    </StyledFilter>
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
