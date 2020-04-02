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
  margin: 10px 0;
  width: 500px;
  border-radius: 10px;

  -webkit-box-shadow: 0px 2px 3px 2px rgba(222, 222, 222, 1);
  -moz-box-shadow: 0px 2px 3px 2px rgba(222, 222, 222, 1);
  box-shadow: 0px 2px 3px 2px rgba(222, 222, 222, 1);

  h3 {
    font-size: 24px;
    font-weight: bold;
  }
`;

const StyledGender = styled.p`
  text-transform: capitalize;
  margin: 10px 0;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
`;

const StyledCountries = styled.div`
  display: flex;
  justify-content: center;

  margin: 5px 0;
`;

const Filter = ({ start_year, end_year, gender, countries, colors }) => {
  const countryList = countries.split(',');
  const colorList = colors.split(',');

  return (
    <StyledFilter>
      <h3>
        {start_year} - {end_year}
      </h3>
      <StyledGender>{gender}</StyledGender>
      <StyledCountries>
        {countryList.map(country => (
          <Country key={v4()} country={country} />
        ))}
      </StyledCountries>
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
