import styled from "styled-components";

export default function Profile() {
  return (
    <MainContent>
      <h1>User's Profile</h1>
      <h2>a protected page</h2>
      <LeftContent>
        <h1>LEFT CONTENT</h1>
        <h1>LEFT CONTENT</h1>
        <h1>LEFT CONTENT</h1>
      </LeftContent>
      <MidContent>
        <h1>MID CONTENT</h1>
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
        <h1>RIGHT CONTENT</h1>
      </RightContent>
    </MainContent>
  );
}

const MainContent = styled.main`
  margin: 0 auto;
  padding: 0;
  grid-column: 2 / 3;
  max-width: 1380px;
  background-color: lightblue;
`;

const LeftContent = styled.div`
  margin: 0;
  padding: 0;
  position: sticky;
  display: inline-block;
  width: 25%;
  background-color: red;
  visibility: hidden;
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
  visibility: hidden;

`;
