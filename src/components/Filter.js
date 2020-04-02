import React from 'react';

const Filter = ({ start_year, end_year, gender, countries, colors }) => {
  const countryList = countries.split(',');
  const colorList = colors.split(',');

  return (
    <div>
      <h3>
        {start_year} - {end_year}
      </h3>
      <p>{gender}</p>
      <div>
        {countryList.map(country => (
          <span key={`${country}`}>{country}</span>
        ))}
      </div>
      <div>
        {colorList.map(color => (
          <span key={`${color}`}>{color}</span>
        ))}
      </div>
    </div>
  );
};

export default Filter;
