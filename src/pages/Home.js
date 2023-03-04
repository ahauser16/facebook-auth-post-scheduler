import styled from "styled-components";

export default function Home() {
  return (
    <MainWrapper>
      <h1>Homepage</h1>
      <h2>an unprotected page</h2>
      <LeftContent>
        <h1>LEFT CONTENT</h1>
        <h1>LEFT CONTENT</h1>
      </LeftContent>
      <MidContent>
        <h1>MID CONTENT</h1>
        <h1>MID CONTENT</h1>
        <h1>MID CONTENT</h1>
        <h1>MID CONTENT</h1>
      </MidContent>
      <RightContent>
        <h1>RIGHT CONTENT</h1>
        <h1>RIGHT CONTENT</h1>
        <h1>RIGHT CONTENT</h1>
        <h1>RIGHT CONTENT</h1>
        <h1>RIGHT CONTENT</h1>
        <h1>RIGHT CONTENT</h1>
      </RightContent>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  margin: 0 auto;
  padding: 0;
  grid-column: 2 / 3;
  max-width: 1380px;
  background-color: lightblue;
  vertical-align: bottom;
`;

const LeftContent = styled.div`
  margin: 0;
  padding: 0;
  position: sticky;
  display: inline-block;
  width: 25%;
  background-color: red;
`;

const MidContent = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  display: inline-block;
  width: 50%;
  background-color: lightcoral;

`;

const RightContent = styled.div`
  margin: 0;
  padding: 0;
  position: sticky;
  display: inline-block;
  width: 25%;
  background-color: lightgoldenrodyellow;

`;
