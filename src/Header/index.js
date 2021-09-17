import styled from "styled-components";

const H1 = styled.h1`
  margin: 20px;
  padding: 20px;
  font-size: 30px;
`;

const Header = ({ title }) => (
    <H1>{title}</H1>
);

export default Header;