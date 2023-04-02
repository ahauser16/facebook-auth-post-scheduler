import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

export default function StepThree() {
  return (
    <CardContainer>
      <CardHeader>
        <CardHeaderTxt>Account Setup</CardHeaderTxt>
        <CardSubHeaderTxt>Step Three</CardSubHeaderTxt>
        <CardSubHeaderTxt>Preview Your Account!</CardSubHeaderTxt>
      </CardHeader>
      <CardLeft>
        Content
        <br />
        Content
        <br />
        Content
        <br />
      </CardLeft>
      <CardRight>
        Content
        <br />
        Content
        <br />
        Content
        <br />
      </CardRight>
      <CardFooter>
        <FormBtn>BACK</FormBtn>
        <FormBtn>CONFIRM</FormBtn>
      </CardFooter>
    </CardContainer>
  );
}

const CardContainer = styled.main`
  margin: auto;
  padding: 0;
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid:
    "HeaderArea     HeaderArea"
    "AreaB          AreaA"
    "FooterArea     FooterArea";
  border-radius: 10px;
`;

const CardHeader = styled.header`
  margin: 0;
  padding: 0;
  max-height: 100px;
  background-color: var(--primary-color);
  border-radius: 10px 10px 0 0;
  color: #fff;
  padding: 1rem;
  text-align: center;
  grid-area: HeaderArea;
`;

const CardLeft = styled.section`
  margin: 0;
  padding: 1rem;
  grid: AreaA;
  max-width: 500px;
  background-color: rgba(255, 255, 255, 0.35);
  box-shadow: inset -10px 0 10px -10px rgba(0, 0, 0, 0.5);
`;

const CardRight = styled.section`
  margin: 0;
  padding: 1rem;
  max-width: 500px;
  grid: AreaB;
  text-align: left;
  background-color: rgba(255, 255, 255, 0.15);
`;

const CardFooter = styled.footer`
  padding: 1rem;
  background-color: var(--primary-color);
  border-radius: 0 0 10px 10px;
  color: #fff;
  /* align-items: auto; */
  grid-area: FooterArea;
  display: flex;
  flex-direction: row;
`;

const CardHeaderTxt = styled.h1`
  margin: 0;
  padding: 0;
  color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardSubHeaderTxt = styled.h4`
  margin: 0;
  padding: 0;
  color: whitesmoke;
`;

const FormBtn = styled(NavLink)`
  display: inline-block;
  margin: auto;
  padding: 0.5rem;
  width: 100px;
  border-radius: 25px;
  color: white;
  background-color: var(--action-color);
  border: 1px solid var(--action-color);
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
`;
