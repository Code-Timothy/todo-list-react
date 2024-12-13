import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto auto;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    word-break: break-word;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    font-size: 16px;
    background-color: green;
    color: white;
    padding: 5px;
    transition: 1s;

    ${({ remove }) => remove && css`
        background-color: red;
    `}

    ${({ edit }) => edit && css`
        background-color: rgb(255, 196, 0); 
    `}

    &:hover{
        opacity: 80%;
        cursor: pointer;
    }
`;