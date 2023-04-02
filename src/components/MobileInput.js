import React, { useState } from "react";
import styled from "styled-components";

const PhoneInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <>
      <Label htmlFor="phone">
        Phone number:
        <StyledInput
          type="tel"
          id="phone"
          name="phone"
          value={phoneNumber}
          onChange={handleInputChange}
        />
      </Label>
    </>
  );
};

export default PhoneInput;

const Label = styled.label`
  margin: 0.5rem;
  display: inline-block;
  font-size: 1rem;
  color: whitesmoke;
  width: 100%;
`;

const StyledInput = styled.input`
  margin: 0;
  display: inline-block;
  border-radius: 6px;
  padding: 0.5rem;
  border: solid 1px #9b9b9b;
  width: 100%;
  font-size: 1.25rem;
  background-color: whitesmoke;
  color: black;
  height: 2rem;
`;
