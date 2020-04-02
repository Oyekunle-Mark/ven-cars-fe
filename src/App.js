import React, { useState, useCallback } from 'react';
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
  });

  return <div>Get started!</div>;
}

export default App;
