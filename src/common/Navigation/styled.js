import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavigation = styled.nav`
    background-color: ${({ theme }) => theme.colors.primaryColor};
`;

export const StyledNavList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 0;
    padding: 10px;
    list-style: none;
`;

export const StyledNavItem = styled.li`
    padding: 10px;
`;

export const StyledNavLink = styled(NavLink)`
    &.active{
        font-weight: bold;
    }

    color: white;
    text-decoration: none;
`;

export const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    font-size: 24px;
    padding: 3px 0 0 0;
    transition: 1s;

    &:hover{
        cursor: pointer;
        transform: scale(1.1);
        opacity: 80%;
    }
`;