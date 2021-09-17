import styled from "styled-components";

const Main = styled.main`
  max-width: 900px;
  padding: 0px;
  margin: 0 auto;
`;

const Container = ({ children }) => (
    <Main>
        {children}
    </Main>
);

export default Container;