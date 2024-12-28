import styled from "styled-components";

export const StyledList = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    list-style: none;
    padding: 0;
`;

export const StyledDateLabel = styled.p`
    color: ${({ theme }) => theme.colors.primaryColor};
`;

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        grid-template-columns: 1fr;
    }
`;

export const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.white};
    padding: 10px;
    border: none;
    transition: 0.5s;

    &:hover{
        transform: scale(1.1);
        opacity: 80%;
        cursor: pointer;
    }
`;