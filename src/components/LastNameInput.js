import React, { useState } from "react";
import styled from "styled-components";

function LastNameInput(props) {
  const [lastName, setLastName] = useState("");

  const handleInputChange = (event) => {
    setLastName(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <>
      <Label htmlFor="lastName">
        Last Name:
        <StyledInput
          placeholder="Last Name"
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleInputChange}
        />
      </Label>
    </>
  );
}

export default LastNameInput;

const Label = styled.label`
  margin: 0.5rem;
  display: block;
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
