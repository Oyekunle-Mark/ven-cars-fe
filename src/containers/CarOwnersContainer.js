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

  return <div>This is a car owner container for filter {id}</div>;
};

export default CarOwnersContainer;
