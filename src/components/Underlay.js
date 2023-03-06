import styled from "styled-components";

export default function Underlay() {
  return (
    <UnderlayWrapper>
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
    </UnderlayWrapper>
  );
}

const UnderlayWrapper = styled.div`
  grid-area: mainContent;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  max-width: 1380px;
  position: relative;
  /* background-color: lightblue; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  /* grid-template-rows: repeat(auto-fill, minmax(100px, 1fr)); */
  grid-auto-flow: row;
  grid-auto-columns: minmax(100px, 1fr);
  /* grid-row: 1fr; */
  grid-gap: 5px;
  z-index: -1;
`;

const UnderlayCol = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  justify-content: space-around;
  align-items: center;
  /* background-color: rgba(255, 255, 255, 0.5); */
`;

const CardImg = styled.img`
  max-width: 100%;
  height: auto;
  /* background-color: rgba(255, 0, 0, 0.5); */
  /* flex-grow: 1 0 auto; */
  margin: 1px 0;
`;
