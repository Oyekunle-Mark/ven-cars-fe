import React from 'react';
import Prop from 'prop-types';
import styled from 'styled-components';

import Color from './Color';

const StyledCarOwner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #ffffff;
  padding: 20px;
  margin: 20px 0;
  width: 600px;
  border-radius: 10px;

  -webkit-box-shadow: 0px 2px 3px 2px rgba(222, 222, 222, 1);
  -moz-box-shadow: 0px 2px 3px 2px rgba(222, 222, 222, 1);
  box-shadow: 0px 2px 3px 2px rgba(222, 222, 222, 1);

  h4 {
    font-size: 18px;
  }
`;

const CarOwner = ({
  first_name,
  last_name,
  email,
  country,
  car_model,
  car_model_year,
  car_color,
  gender,
  job_title,
  bio,
}) => (
  <StyledCarOwner>
    <h4>
      {first_name} {last_name}
    </h4>
    <div>
      <p>Brand {car_model}</p>
      <p>Year {car_model_year}</p>
      <p>
        Color <Color color={car_color} />
      </p>
    </div>
    <div>
      <p>Country {country}</p>
      <p>Gender {gender}</p>
      <p>Job {job_title}</p>
    </div>
    <div>
      <p>Email:{email}</p>
      <p>Bio: {bio}</p>
    </div>
  </StyledCarOwner>
);

CarOwner.propTypes = {
  first_name: Prop.string.isRequired,
  last_name: Prop.string.isRequired,
  email: Prop.string.isRequired,
  country: Prop.string.isRequired,
  car_color: Prop.string.isRequired,
  car_model: Prop.string.isRequired,
  car_model_year: Prop.string.isRequired,
  gender: Prop.string.isRequired,
  job_title: Prop.string.isRequired,
  bio: Prop.string.isRequired,
};

export default CarOwner;
