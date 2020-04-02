import React from 'react';
import Prop from 'prop-types';
import styled from 'styled-components';

const StyledCountry = styled.span`
  font-size: 16px;
  background: #dedede;
  
  padding: 5px;
`;

const Country = ({ country }) => <StyledCountry>{country}</StyledCountry>;

Country.propTypes = {
  country: Prop.string.isRequired,
};

export default Country;
