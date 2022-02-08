import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    background: transparent;
    color: ${({ theme }) => theme.color.primaryColor};
    border: none;
    margin: 0 0 0 20px;
    transition: color 0.3s;
    font-size: 14px;

    &.hover {
    color: hsl(180, 100%, 35%);
    }

    &.disabled {
    color: #ccc;
    }

    @media(max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
    }
`;