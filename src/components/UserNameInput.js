import React, { useState } from "react";
import styled from "styled-components";

function UserNameInput(props) {
  const [userName, setUserName] = useState("");

  const handleInputChange = (event) => {
    setUserName(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <>
      <Label htmlFor="userName">
        Username:
        <StyledInput
          placeholder="Username"
          type="text"
          id="userName"
          name="userName"
          value={userName}
          onChange={handleInputChange}
        />
      </Label>
    </>
  );
}

export default UserNameInput;

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
  padding: 0.5rem;
  border: none;
  width: 100%;
  font-size: 1.25rem;
  background-color: whitesmoke;
  color: black;
  height: 2rem;
`;
