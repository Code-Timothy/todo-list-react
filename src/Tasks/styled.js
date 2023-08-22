import styled, { css } from "styled-components";

export const StyledList = styled.ul`
    margin: 0;
    padding: 28px;
    list-style: none;
`;

export const StyledItem = styled.li`
    display: grid;
    grid-template-columns: 30px 1fr 30px;
    gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 2px solid #eee;
    word-break: break-word;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: green;
    color: white;
    height: 30px;
    transition: 1s;

    &:hover{
        opacity: 70%;
        cursor: pointer;
    }

    ${({ remove }) => remove && css`
        background-color: red;
    `}
`;

export const StyledParagraph = styled.p`
    margin: 0;
    padding: 0;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;