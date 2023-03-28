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
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  grid-area: header;
  display: flex;
  font-size: 14px;
  line-height: 20px;
  padding: 0;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(15px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
`;
