import React from 'react';
import Prop from 'prop-types';
import styled from 'styled-components';

const StyledCountry = styled.span`
  font-size: 13px;
  background: #dedede;
  border-radius: 12px;
  padding: 5px 10px;
  margin: 0 5px;
  text-transform: capitalize;
`;

const Country = ({ country }) => {
  return country && <StyledCountry>{country}</StyledCountry>;
};

Country.propTypes = {
  country: Prop.string.isRequired,
};

export default Country;
