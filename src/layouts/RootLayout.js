import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import { Outlet } from "react-router-dom";

import AuthConsumer from "../context/UserAuthentication";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout() {
  const [authenticated, dispatch] = AuthConsumer();
  console.log(authenticated);

  return (
    <GridContainer>
      <GlobalStyle />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </GridContainer>
  );
}

const GridContainer = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  justify-content: center;
`;
