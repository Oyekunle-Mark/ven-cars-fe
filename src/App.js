import React, { useState, useCallback, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import FiltersContainer from './containers/FiltersContainer';

function App() {
  const [carState, setCarState] = useState({
    loading: true,
    filters: [],
  });

  const fetchFilters = useCallback(async () => {
    const response = await axios.get(
      'https://ven-cars.herokuapp.com/api/v1/filters',
    );

    setCarState({
      loading: false,
      filters: response.data.data,
    });
  }, []);

  useEffect(() => {
    fetchFilters();
  }, []);

  return (
    <Route
      exact
      path="/"
      render={props =>
        carState.loading ? (
          <div>Loading...</div>
        ) : (
          <FiltersContainer {...props} filters={carState.filters} />
        )
      }
    />
  );
}

export default App;
