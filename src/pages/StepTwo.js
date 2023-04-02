import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

export default function StepTwo() {
  return (
    <CardContainer>StepTwo</CardContainer>
  )
}

const CardContainer = styled.main`
  margin: auto;
  padding: 0;
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid:
    "HeaderArea     HeaderArea"
    "AreaA          AreaB"
    "FooterArea     FooterArea";
  border-radius: 10px;
`;