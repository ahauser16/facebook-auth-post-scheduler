import React, { useState } from "react";
import styled from "styled-components";

function EmailInput() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <Label htmlFor="email">
        Email Address:
        <StyledInput
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </Label>
    </>
  );
}

export default EmailInput;

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
