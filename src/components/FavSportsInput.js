import React, { useState } from "react";
import styled from "styled-components";

function FavSportsInput(props) {
  const [favSports, setFavSports] = useState("");

  const handleInputChange = (event) => {
    setFavSports(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <>
      <Label>
        Favorite Sports:
        <StyledInput
          placeholder="Baseball, Football, Basketball, etc"
          type="text"
          id="favSports"
          name="favSports"
          value={favSports}
          onChange={handleInputChange}
        />
      </Label>
    </>
  );
}

export default FavSportsInput;

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
