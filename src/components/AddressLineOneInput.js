import React, { useState } from "react";
import styled from "styled-components";

function AddressLineOneInput(props) {
  const [addressLine1, setAddressLine1] = useState("");

  const handleInputChange = (event) => {
    setAddressLine1(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <>
      <Label htmlFor="addressLine1">
        Address Line 1:
        <StyledInput
          placeholder="Address Line 1"
          type="text"
          id="addressLine1"
          name="addressLine1"
          value={addressLine1}
          onChange={handleInputChange}
        />
      </Label>
    </>
  );
}

export default AddressLineOneInput;

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
  border: none;

  padding: 0.5rem;
  width: 100%;
  font-size: 1.25rem;
  background-color: whitesmoke;
  color: black;
  height: 2rem;
`;
