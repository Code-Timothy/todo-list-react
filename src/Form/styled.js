import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    padding: 20px;
    grid-template-columns: 1fr 150px;
    gap: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        grid-template-columns: 1fr;
    }
`;

export const StyledInput = styled.input`
    padding: 10px;
    border: 2px solid ${({ theme }) => theme.colors.gallery};

    &::placeholder{
        color: ${({ theme }) => theme.colors.dustyGray};
    }
`;

export const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    padding: 5px;
    border: none;
    letter-spacing: 1px;
    transition: 1s;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        padding: 10px;
    }

    &:hover{
        background-color: hsl(180, 100%, 30%);
        cursor: pointer;
        transform: scale(1.1);
    }
`;