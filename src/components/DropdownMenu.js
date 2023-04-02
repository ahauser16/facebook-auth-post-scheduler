import React, { useState } from "react";
import styled from "styled-components";
import menuItems from "../data/utilsData";


function DropdownMenu(props) {
  const [selectedItem, setSelectedItem] = useState("Select a State");

  const handleSelectChange = (event) => {
    setSelectedItem(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <>
      <Label htmlFor="state">
        State:
        <StyledSelect
          placehold="State"
          value={selectedItem}
          onChange={handleSelectChange}
        >
          <DefaultOption value="">Select a State</DefaultOption>
          {menuItems.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
        </StyledSelect>
      </Label>
    </>
  );
}

export default DropdownMenu;

const Label = styled.label`
  margin: 0.5rem;
  display: block;
  font-size: 1rem;
  color: whitesmoke;
  width: 100%;
`;

const StyledSelect = styled.select`
  margin: 0;
  padding: 0;
  display: block;
  border-radius: 6px;
  border: none;
  background-color: whitesmoke;
  color: gray;
  font-size: 1.25rem;
  height: 2rem;
  text-align: left;
`;

const DefaultOption = styled.option`
  color: red;
`;
