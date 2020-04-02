import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import CarOwer from '../components/CarOwner';

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
    <div>
      {cars.loading ? (
        <div>Loading...</div>
      ) : (
        cars.filteredCars.map(car => <CarOwer key={car.id} {...car} />)
      )}
    </div>
  );
};

export default CarOwnersContainer;
