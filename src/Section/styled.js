import styled from "styled-components";

export const StyledSection = styled.section`
    padding: 20px;
    margin: 10px 0;
    background-color: white;
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
    padding: ${({theme})=> theme.padding.paddingTen};
    border-bottom: 1px solid rgb(233, 233, 233);

  @media(max-width:700px) {
        grid-template-columns: auto;
        grid-gap: 10px;
  }
`;

export const H2 = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const Div = styled.div`
  padding: ${({theme})=> theme.padding.paddingTen};
  display: grid;
`;