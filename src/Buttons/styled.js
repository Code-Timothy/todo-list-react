import styled, { css } from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    gap: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        flex-direction: column;
    }
`;

export const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primary};
    transition: 1s;

    &:hover{
        cursor: pointer;
        color: hsl(180, 100%, 30%);
    }

    ${({ disabled }) => disabled && css`
        &:disabled{
            color: ${({ theme }) => theme.colors.dustyGray};
            cursor: default;
        }
    `}
`;