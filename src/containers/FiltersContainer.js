import React from 'react';
import Prop from 'prop-types';
import { Link } from 'react-router-dom';

import Filter from '../components/Filter';

const FiltersContainer = ({ filters }) => {
  return (
    <div>
      {filters.map(filter => (
        <Link key={filter.id} to={`/filter/${filter.id}`}>
          <Filter {...filter} />
        </Link>
      ))}
    </div>
  );
};

FiltersContainer.propTypes = {
  filters: Prop.arrayOf(Prop.object).isRequired,
};

export default FiltersContainer;
