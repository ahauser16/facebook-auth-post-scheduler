import React, { useState } from "react";
import styled from "styled-components";

function AddressLineTwoInput(props) {
  const [addressLine2, setAddressLine2] = useState("");

  const handleInputChange = (event) => {
    setAddressLine2(event.target.value);
    props.onChange(event.target.value);
  };


  return (
    <>
      <Label htmlFor="addressLine2">
        Address Line 2:
        <StyledInput
          placeholder="Address Line 2"
          type="text"
          id="addressLine2"
          name="addressLine2"
          value={addressLine2}
          onChange={handleInputChange}
        />
      </Label>
    </>
  );
}

export default AddressLineTwoInput;

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
  border: solid 1px #9b9b9b;
  width: 100%;
  font-size: 1.25rem;
  background-color: whitesmoke;
  color: black;
  height: 2rem;
`;
