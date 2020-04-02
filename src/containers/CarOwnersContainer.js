import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from 'react-spinner-material';

import CarOwer from '../components/CarOwner';

const StyledCarOwnersContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledCarOwnerHeader = styled.h2`
  font-size: 30px;
`;

const CarOwnersContainer = () => {
  const [cars, setCars] = useState({
    loading: true,
    filteredCars: [],
  });

  const { id } = useParams();

  const fetchCars = useCallback(async () => {
    const response = await axios.get(
      `https://ven-cars.herokuapp.com/api/v1/filter/${id}`,
    );

    setCars({
      loading: false,
      filteredCars: response.data.data,
    });
  });

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <StyledCarOwnersContainer>
      {cars.loading ? (
        <Spinner radius={50} color={'#040404'} stroke={2} visible={true} />
      ) : (
        <div>
          <StyledCarOwnerHeader>Car Owners</StyledCarOwnerHeader>
          {cars.filteredCars.map(car => (
            <CarOwer key={car.id} {...car} />
          ))}
        </div>
      )}
    </StyledCarOwnersContainer>
  );
};

export default CarOwnersContainer;
