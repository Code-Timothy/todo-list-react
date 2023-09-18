import styled, { css } from "styled-components";

export const StyledList = styled.ul`
    margin: 0;
    padding: 28px;
    list-style: none;
`;

export const StyledItem = styled.li`
    display: grid;
    grid-template-columns: 30px 1fr 30px 30px;
    gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.gallery};
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
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
    height: 30px;
    transition: 1s;

    &:hover{
        opacity: 70%;
        cursor: pointer;
    }
`;

export const EditButton = styled(StyledButton)`
    background-color: ${({ theme }) => theme.colors.goldTips}
`;

export const RemoveButton = styled(StyledButton)`
    background-color: ${({ theme }) => theme.colors.red}
`;

export const StyledParagraph = styled.p`
    margin: 0;
    padding: 0;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Input = styled.input`
    @media(max-width: ${({ theme }) => theme.breakpoints.small}px){
        width: 100%;
    }
`;