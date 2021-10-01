import { StyledSection, Header, H2, Div } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
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