import styled, { css } from "styled-components";

const Button = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
    padding: 5px;
    transition: 1s;

    ${({ $remove }) => $remove && css`
        background-color: ${({ theme }) => theme.colors.red};
    `}

    ${({ $edit }) => $edit && css`
        background-color: ${({ theme }) => theme.colors.amber}; 
    `}

    &:hover{
        opacity: 80%;
        cursor: pointer;
    }
`;

export default Button;