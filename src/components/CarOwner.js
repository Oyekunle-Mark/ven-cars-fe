import React from 'react';

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

export default CarOwner;
