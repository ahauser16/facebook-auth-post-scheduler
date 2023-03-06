import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import { Outlet } from "react-router-dom";

import AuthConsumer from "../context/UserAuthentication";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Underlay from "../components/Underlay";

export default function RootLayout() {
  const [authenticated, dispatch] = AuthConsumer();
  console.log(authenticated);

  return (
    <AppGridContainer>
      <GlobalStyle />
      <Header />
      <Underlay />
      <MainWrapper>
        <Outlet />
      </MainWrapper>
      <Footer />
    </AppGridContainer>
  );
}

const AppGridContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  min-height: 100vh;
  display: grid;
  grid:
    "header"
    "mainContent"
    "footer";
  justify-content: center;
  align-items: center;
`;

const MainWrapper = styled.main`
  grid-area: mainContent;
  position: relative;
  margin: 0 auto;
  padding: 0;
  max-width: 1380px;
  z-index: 1;
  /* background-color: lightblue; */
  overflow: hidden;
`;
