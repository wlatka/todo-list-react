import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    padding: 10px;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    border-bottom: 1px solid rgb(233, 233, 233);
    align-items: center;
    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
font-size: 16px;
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: none;
    color: white;
    width: 30px;
    height: 30px;
    padding: 0;
    transition: background 0.3s;

    ${({ toggleDone }) => toggleDone && css`
        background: hsl(120, 100%, 24%);
        &:hover {
            background: hsl(120, 100%, 34%);
        }
    `}

    ${({ remove }) => remove && css`
        background: hsl(348, 83%, 42%); 
        &:hover {
            background: hsl(348, 83%, 58%);
        }
        &:active {
            background: hsl(348, 83%, 62%);
        }
    `}
`;