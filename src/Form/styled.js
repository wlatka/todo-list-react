import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    grid-gap: 10px;
`;

export const Input = styled.input`
    flex-grow: 3;
    padding-left: 10px;  
    border: 1px solid ${({ theme }) => theme.color.primaryColor};
`;

export const Button = styled.button`
    flex-grow: 1;
    background-color: hsl(180, 100%, 19%);
    color: ${({ theme }) => theme.color.white};
    border-style: none;
    height: 30px;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
    transition: 1.0s;

    &.hover {
        transform: scale(1.1);
        background-color: hsl(180, 100%, 29%);
    }

    &.active {
        background: hsl(180, 100%, 34%);
    }
`;