import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import FilePreviewer from "../components/ImgPreviewer";
import DropdownMenu from "../components/DropdownMenu";
import menuItems from "../data/utilsData";
import ZipCodeInput from "../components/ZipCodeInput";
import AddressLineOneInput from "../components/AddressLineOneInput";
import AddressLineTwo from "../components/AddressLineTwoInput";
import FirstNameInput from "../components/FirstNameInput";
import LastNameInput from "../components/LastNameInput";
import UserNameInput from "../components/UserNameInput";
import EmailInput from "../components/EmailInput";
import MobileInput from "../components/MobileInput";
import CityInput from "../components/CityInput";

export default function StepOne(props) {
  // const { register, handleSubmit } = useForm();

  const [selectedState, setSelectedState] = useState("");

  const handleStateSelect = (state) => {
    setSelectedState(state);
  };

  return (
    <CardContainer>
      <CardHeader>
        <CardHeaderTxt>Account Setup</CardHeaderTxt>
        <CardSubHeaderTxt>Step One</CardSubHeaderTxt>
      </CardHeader>

      <CardLeft>
        <SubCard>
          <SubCardHeader>
            <CardSubHeaderTxt>PROFILE PICTURE</CardSubHeaderTxt>
          </SubCardHeader>
          <ProfilePicContainer>
            <FilePreviewer />
          </ProfilePicContainer>
          <SubCardFooter>Footer</SubCardFooter>
        </SubCard>
      </CardLeft>

      <CardRight>
        <FormContainer>
          <Row>
            <FirstNameInput />
            <LastNameInput />
          </Row>
          <Row>
            <UserNameInput />
          </Row>
          <Row>
            <AddressLineOneInput />
          </Row>
          <Row>
            <AddressLineTwo />
          </Row>
          <Row>
            <CityInput />
            <DropdownMenu />
            <ZipCodeInput />
          </Row>
          <Row>
            <EmailInput />
            <MobileInput />
          </Row>
        </FormContainer>
      </CardRight>

      <CardFooter>
        <FormBtn>BACK</FormBtn>
        <FormBtn>NEXT</FormBtn>
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
    "AreaA          AreaB"
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

const SubCardHeader = styled(CardHeader)`
  background-color: var(--secondary-color);
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

const SubCardFooter = styled(CardFooter)`
  background-color: var(--secondary-color);
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

const CardLeft = styled.section`
  margin: 0;
  padding: 1rem;
  grid: AreaA;
  /* justify-items: center; */
  /* display: flex;
  flex-direction: column; */
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

const SubCard = styled.section`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
`;

const ProfilePicContainer = styled.article`
  /* margin: 0 0.25rem; */
  /* padding-bottom: 71.4%; */
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 200px;
  text-align: center;
  justify-items: center;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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
