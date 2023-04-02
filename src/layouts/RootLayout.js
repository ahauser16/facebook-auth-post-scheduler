import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import { Outlet } from "react-router-dom";

import AuthConsumer from "../context/UserAuthentication";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout() {
  const [authenticated, dispatch] = AuthConsumer();

  return (
    <AppGridContainer>
      <GlobalStyle />
      <Header />
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
  margin: 0;
  padding: 0;
  max-width: 1380px;
  /* background-color: lightblue; */
  overflow: hidden;
  display: block;
`;
