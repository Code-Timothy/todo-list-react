import { StyledNavigation, StyledNavList, StyledNavItem, StyledNavLink } from "./styled";

const Navigation = () => (
    <StyledNavigation>
        <StyledNavList>
            <StyledNavItem><StyledNavLink to="/zadania">Zadania</StyledNavLink></StyledNavItem>
            <StyledNavItem><StyledNavLink to="/autor">O autorze</StyledNavLink></StyledNavItem>
        </StyledNavList>
    </StyledNavigation>
);

export default Navigation;