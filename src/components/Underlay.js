import styled from "styled-components";

export default function Underlay() {
  return (
    <UnderlayWrapper>
      <UnderlayCol>
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
      </UnderlayCol>
      <UnderlayCol>
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
      </UnderlayCol>
      <UnderlayCol>
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
      </UnderlayCol>
      <UnderlayCol>
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
      </UnderlayCol>
      <UnderlayCol>
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
      </UnderlayCol>
      <UnderlayCol>
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
      </UnderlayCol>
      <UnderlayCol>
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
        <CardImg src="images/baseball/adolis-garcia.png" alt="Adolis Garcia" />
      </UnderlayCol>
    </UnderlayWrapper>
  );
}

const UnderlayWrapper = styled.div`
  grid-area: mainContent;
  width: 100%;
  /* position: relative; */
  /* background-color: lightblue; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  /* grid-template-rows: repeat(auto-fill, minmax(100px, 1fr)); */
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
  width: 100%;
  height: 100%;
  /* background-color: rgba(255, 0, 0, 0.5); */
  /* flex-grow: 1 0 auto; */
  margin: 5px 0;
`;
