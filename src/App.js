import React, { useState, useCallback, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import FiltersContainer from './containers/FiltersContainer';
import CarOwnersContainer from './containers/CarOwnersContainer';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;
  min-width: 100vw;
  background: #fafafa;
  color: #040404;
  font-family: 'Nunito', sans-serif;
  font-size: 16px;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const StyledContainer = styled.div`
  max-width: 300px;
`;

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
    <div>
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

      <Route
        path="/filter/:id"
        render={props => <CarOwnersContainer {...props} />}
      />
    </div>
  );
}

export default App;
