import React, { useState } from "react";
import styled from "styled-components";

function FavTeamsInput(props) {
  const [favTeams, setFavTeams] = useState("");

  const handleInputChange = (event) => {
    setFavTeams(event.target.value);
    props.onChange(event.target.value);
  };
  return (
    <>
      <Label>
        Favorite Teams:
        <StyledInput
          placeholder="NY Yankees, CO Broncos, LA Lakers, etc"
          type="text"
          id="favTeams"
          name="favTeams"
          value={favTeams}
          onChange={handleInputChange}
        />
      </Label>
    </>
  );
}

export default FavTeamsInput;

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
