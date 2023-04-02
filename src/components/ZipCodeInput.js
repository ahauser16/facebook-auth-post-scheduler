import React, { useState } from "react";
import styled from "styled-components";

function ZipCodeInput(props) {
  const [zipCode, setZipCode] = useState("");

  const handleChange = (event) => {
    setZipCode(event.target.value);
  };

  return (
    <>
      <Label htmlFor="zip-code">
        Zip Code:
        <StyledInput
          type="text"
          id="zip-code"
          name="zip-code"
          value={zipCode}
          onChange={handleChange}
          placeholder="12345"
          pattern="[0-9]*"
        />
      </Label>
    </>
  );
}

export default ZipCodeInput;

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
  text-align: center;
  width: 5rem;
`;
