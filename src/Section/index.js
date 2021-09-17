import styled from "styled-components";

const StyledSection = styled.section`
  padding: 20px;
  margin: 10px 0;
  background-color: white;
`;

const Header = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  padding: 10px;
  border-bottom: 1px solid rgb(233, 233, 233);

  @media(max-width:700px) {
        grid-template-columns: auto;
        grid-gap: 10px;
  }
`;

const H2 = styled.h2`
  font-size: 20px;
  margin: 0;
`;

const Div = styled.div`
  padding: 10px;
  display: grid;
`;

const Section = ({ title, body, extraHeaderContent, className }) => (
    <StyledSection className={className}>
        <Header>
            <H2>{title}</H2>
            {extraHeaderContent}
        </Header>
        <Div>
            {body}
        </Div>
    </StyledSection>
);

export default Section;