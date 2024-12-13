import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;
    letter-spacing: 1px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    transition: 0.5s;

    &:hover{
        transform: scale(1.1);
        opacity: 80%;
        cursor: pointer;
    }
`;

export const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.colors.alto};
    padding: 10px;
`;