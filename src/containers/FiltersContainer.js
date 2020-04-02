import React from 'react';
import Prop from 'prop-types';

import Filter from '../components/Filter';

const FiltersContainer = ({ filters }) => {
  return (
    <div>
      {filters.map(filter => (
        <Filter key={filter.id} {...filter} />
      ))}
    </div>
  );
};

FiltersContainer.propTypes = {
  filters: Prop.arrayOf(Prop.object).isRequired,
};

export default FiltersContainer;
