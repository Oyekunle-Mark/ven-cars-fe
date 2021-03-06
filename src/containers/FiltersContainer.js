import React from 'react';
import Prop from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Filter from '../components/Filter';

const StyledFiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledFilterHeader = styled.h2`
  font-size: 30px;
`;

const FiltersContainer = ({ filters }) => {
  return (
    <StyledFiltersContainer>
      <StyledFilterHeader>Filter</StyledFilterHeader>

      {filters.map(filter => (
        <Link key={filter.id} to={`/filter/${filter.id}`}>
          <Filter {...filter} />
        </Link>
      ))}
    </StyledFiltersContainer>
  );
};

FiltersContainer.propTypes = {
  filters: Prop.arrayOf(Prop.object).isRequired,
};

export default FiltersContainer;
