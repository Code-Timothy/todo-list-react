import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primaryColor};

    &:hover{
        opacity: 80%;
        cursor: pointer;
    }
`;

export const Content = styled.span`
    ${({ $done }) => $done && css`
        text-decoration: line-through;
    `}
`;

export const Input = styled.input`
    @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}px){
        width: 160px;
    }
`;