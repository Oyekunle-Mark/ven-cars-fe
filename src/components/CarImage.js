import React from 'react';
import styled from 'styled-components';

import carSvg from '../assets/car.svg';

const StyledCarImage = styled.img`
  width: 120px;
  height: 70px;
`;

const CarImage = () => <StyledCarImage src={carSvg} alt="car" />;

export default CarImage;
