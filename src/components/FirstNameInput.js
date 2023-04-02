import React, { useState } from "react";
import styled from "styled-components";

function FirstNameInput(props) {
  const [firstName, setFirstName] = useState("");

  const handleInputChange = (event) => {
    setFirstName(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <>
      <Label htmlFor="firstName">
        First Name:
        <StyledInput
          placeholder="First Name"
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleInputChange}
        />
      </Label>
    </>
  );
}

export default FirstNameInput;

const Label = styled.label`
  margin: 0.5rem;
  display: block;
  font-size: 1rem;
  color: whitesmoke;
  width: 100%;
`;

const StyledInput = styled.input`
  margin: 0;
  padding: 0.5rem;
  display: inline-block;
  border-radius: 6px;
  border: none;
  width: 100%;
  font-size: 1.25rem;
  background-color: whitesmoke;
  color: black;
  height: 2rem;
`;
