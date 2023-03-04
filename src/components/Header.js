import styled from "styled-components";
import Navbar from "../components/Navbar";

export default function Header() {
  return (
    <>
      <HeaderWrapper>
        <Navbar />
      </HeaderWrapper>
    </>
  );
}

const HeaderWrapper = styled.header`
  margin: 0;
  padding: 0;
  grid-column: 1 / 4;
  display: flex;
  /* padding-top: 50px; */
  font-size: 14px;
  line-height: 20px;
  /* height: 100px;
  background-color: red; */
  background-color: crimson;

`;
