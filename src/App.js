import React, { useState, useCallback, useEffect } from 'react';
// import { Route } from "react-router-dom";
import axios from 'axios';

import Filter from './components/Filter';

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

  return carState.loading ? (
    <div>Loading...</div>
  ) : (
    carState.filters.map(filter => <Filter key={filter.id} {...filter} />)
  );
}

export default App;
