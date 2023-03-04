import styled from 'styled-components';


export default function UserDashboard() {
  return (
    <MainContent>
      <h1>User Dashboard</h1>
      <h2>a protected page</h2>
    </MainContent>
  );
}

const MainContent = styled.main`
    margin: 0 auto;
    padding: 0;
    grid-column: 2 / 3;
    max-width:1380px;
    background-color: lightblue
`