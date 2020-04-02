import React from 'react';

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

export default FiltersContainer;
