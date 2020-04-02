import React from 'react';
import Prop from 'prop-types';
import styled from 'styled-components';

import Color from './Color';
import CarImage from './CarImage';

const StyledCarOwner = styled.div`
  display: flex;

  background: #ffffff;
  padding: 20px;
  margin: 20px 0;
  width: 600px;
  border-radius: 10px;

  -webkit-box-shadow: 0px 2px 3px 2px rgba(222, 222, 222, 1);
  -moz-box-shadow: 0px 2px 3px 2px rgba(222, 222, 222, 1);
  box-shadow: 0px 2px 3px 2px rgba(222, 222, 222, 1);
`;

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 150px;
`;

const StyledOwnerDetails = styled.div`
  h4 {
    font-size: 18px;
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
  }

  span {
    font-size: 14px;
  }
`;

const StyledCarMetaContainer = styled.div`
  display: flex;

  margin-bottom: 10px;

  div {
    border-right: 1px solid black;
  }

  div:last-child {
    border-right: 0;
  }
`;

const StyledCarMeta = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 10px;
  padding-right: 10px;

  p {
    color: #7b7b7b;
    margin-bottom: 5px;
  }
`;

const StyledOwnerMetaContainer = styled.div`
  display: flex;

  margin-bottom: 10px;
`;

const StyledOwnerMeta = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 10px;

  p {
    color: #7b7b7b;
    margin-bottom: 5px;
  }
`;

const StyledImageBioContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledImageBio = styled.div`
  display: flex;

  p {
    color: #7b7b7b;
    margin-bottom: 5px;
    margin-right: 3px;
  }

  span {
    width: 400px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
    <StyledImageContainer>
      <CarImage />
    </StyledImageContainer>

    <StyledOwnerDetails>
      <h4>
        {first_name} {last_name}
      </h4>

      <StyledCarMetaContainer>
        <StyledCarMeta>
          <p>Brand</p> <span>{car_model}</span>
        </StyledCarMeta>
        <StyledCarMeta>
          <p>Year</p> <span>{car_model_year}</span>
        </StyledCarMeta>
        <StyledCarMeta>
          <p>Color</p> <Color color={car_color} />
        </StyledCarMeta>
      </StyledCarMetaContainer>

      <StyledOwnerMetaContainer>
        <StyledOwnerMeta>
          <p>Country</p>
          <span>{country}</span>
        </StyledOwnerMeta>
        <StyledOwnerMeta>
          <p>Gender</p>
          <span>{gender}</span>
        </StyledOwnerMeta>
        <StyledOwnerMeta>
          <p>Job</p>
          <span>{job_title}</span>
        </StyledOwnerMeta>
      </StyledOwnerMetaContainer>

      <StyledImageBioContainer>
        <StyledImageBio>
          <p>Email: </p> <span>{email}</span>
        </StyledImageBio>
        <StyledImageBio>
          <p>Bio: </p> <span>{bio}</span>
        </StyledImageBio>
      </StyledImageBioContainer>
    </StyledOwnerDetails>
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
