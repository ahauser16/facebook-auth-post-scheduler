import React, { useState } from "react";
import styled from "styled-components";

function CityInput() {
  const [city, setCity] = useState("");

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <>
      <Label htmlFor="city">
        City:
        <StyledInput
          type="text"
          id="city"
          name="city"
          value={city}
          onChange={handleCityChange}
          placeholder=" City Name"
        />
      </Label>
    </>
  );
}

export default CityInput;

const Label = styled.label`
  margin: 0.5rem;
  display: inline-block;
  font-size: 1rem;
  color: whitesmoke;
  width: 100%;
`;

const StyledInput = styled.input`
  margin: 0;
  padding: 0;
  display: block;
  border-radius: 6px;
  border: none;
  background-color: whitesmoke;
  color: black;
  font-size: 1.25rem;
  height: 2rem;
  width: 100%;
`;
