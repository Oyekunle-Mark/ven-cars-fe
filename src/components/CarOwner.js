import React from 'react';
import Prop from 'prop-types';

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
  <div>
    <h4>
      {first_name} {last_name}
    </h4>
    <div>
      <p>Brand {car_model}</p>
      <p>Year {car_model_year}</p>
      <p>Color {car_color}</p>
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
  </div>
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
