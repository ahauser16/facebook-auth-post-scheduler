import styled from "styled-components";

export default function Home() {
  return (
    <SubGridWrapper>
      <LeftContent>
        <h1>LEFT CONTENT</h1>
        <h1>LEFT CONTENT</h1>
        <h1>LEFT CONTENT</h1>
      </LeftContent>
      <MidContent>
        <h1>Homepage</h1>
        <h2>an unprotected page</h2>
        <h1>MID CONTENT</h1>
        <h1>MID CONTENT</h1>
        <h1>MID CONTENT</h1>
      </MidContent>
      <RightContent>
        <h1>RIGHT CONTENT</h1>
        <h1>RIGHT CONTENT</h1>
        <h1>RIGHT CONTENT</h1>
      </RightContent>
    </SubGridWrapper>
  );
}

const SubGridWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 1fr;
  grid-template-columns: 2fr 7fr 2fr;

  //   margin: 0 auto;
  //   padding: 0;
  //   grid-column: 1 / 3;
  //   max-width: 1380px;
  //   background-color: lightblue;
`;

const LeftContent = styled.div`
  margin: 0 10px;
  padding: 0;
  /* position: bottom; */
  background-color: rgba(255, 255, 255, 0.2);
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  backdrop-filter: blur(15px);
  border: 1px solid #fff;
  border-bottom: 1px solid rgba(255, 255, 255.5);
  border-right: 1px solid rgba(255, 255, 255.5);
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
  color: black;
`;

const MidContent = styled.div`
  margin: 0;
  padding: 0;
  /* width: 100%;
  height: 100%; */
  background-color: rgba(255, 255, 255, 0.2);
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  backdrop-filter: blur(15px);
  border: 1px solid #fff;
  border-bottom: 1px solid rgba(255, 255, 255.5);
  border-right: 1px solid rgba(255, 255, 255.5);
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
  color: black;
`;

const RightContent = styled.div`
  margin: 0 10px;
  padding: 0;
  background-color: rgba(255, 255, 255, 0.2);
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  backdrop-filter: blur(15px);
  border: 1px solid #fff;
  border-bottom: 1px solid rgba(255, 255, 255.5);
  border-right: 1px solid rgba(255, 255, 255.5);
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
  color: black;
`;

const UnderlayWrapper = styled.div`
  grid-row: 2/3;

  display: grid;
  grid-template-columns: repeat(10, 10%);
`;

const UnderlayCol = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  justify-content: space-around;
  align-items: center;
`;

const CardImg = styled.div`
  width: 64px;
  height: 89px;
  background-color: rgba(0, 0, 0, 0.5);
  flex-grow: 1 0 auto;
  margin: 5px 0;
`;
