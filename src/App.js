import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

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
      filters: response.data,
    });
  }, []);

  useEffect(() => {
    fetchFilters();
  }, []);

  return carState.loading ? (
    <div>Loading...</div>
  ) : (
    <div>Fetched successfully</div>
  );
}

export default App;
