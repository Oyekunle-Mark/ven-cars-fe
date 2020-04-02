import React from 'react';
import { useParams } from 'react-router-dom';

const CarOwnersContainer = () => {
  const { id } = useParams();

  return <div>This is a car owner container for filter {id}</div>;
};

export default CarOwnersContainer;
