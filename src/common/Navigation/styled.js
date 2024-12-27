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