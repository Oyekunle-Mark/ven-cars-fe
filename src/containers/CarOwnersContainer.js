import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
      filters: response.data.data,
    });
  });

  useEffect(() => {
    fetchCars();
  }, []);

  return cars.loading ? (
    <div>Loading...</div>
  ) : (
    cars.filteredCars.map(car => (
      <div key={car.id}>
        {car.first_name} {car.last_name}
      </div>
    ))
  );
};

export default CarOwnersContainer;
