import styled from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        flex-direction: column
    }
`;

export const Button = styled.button`
    background: transparent;
    color: ${({ theme }) => theme.colors.primaryColor};
    margin: 0 0 0 20px;
    border: none;
    transition: color 0.5s;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        margin: 10px;
    }

    &:hover{
        opacity: 80%;
        cursor: pointer;
    }

    &:disabled{
        color: ${({ theme }) => theme.colors.gray};
    }
`;