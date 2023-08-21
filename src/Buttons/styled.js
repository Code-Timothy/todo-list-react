import styled, { css } from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    gap: 20px;

    @media(max-width: 768px){
        flex-direction: column;
    }
`;

export const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 18px;
    color: teal;
    transition: 1s;

    &:hover{
        cursor: pointer;
        color: hsl(180, 100%, 30%);
    }

    ${({ disabled }) => disabled && css`
        color: #999;
        cursor: default;
    `}
`;