import React from 'react';
import Prop from 'prop-types';
import styled from 'styled-components';

const StyledCountry = styled.span`
  display: flex;
  flex-direction: row;

  font-size: 16px;
  background: #dedede;
  border-radius: 8px;
  padding: 5px 10px;
`;

const Country = ({ country }) => <StyledCountry>{country}</StyledCountry>;

Country.propTypes = {
  country: Prop.string.isRequired,
};

export default Country;
