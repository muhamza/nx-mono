import styled from 'styled-components';

const StyledPage = styled.div`
  background-color: orange;
  display: flex;
`;

export function Index() {
  return (
    <StyledPage>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>Hello mono 👋</h1>
          </div>
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
