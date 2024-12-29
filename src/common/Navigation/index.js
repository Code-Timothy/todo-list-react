import { useHistory } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { toTasks, toAuthor } from "../../routes";
import { StyledNavigation, StyledNavList, StyledNavItem, StyledNavLink, StyledButton } from "./styled";

const Navigation = () => {
    const history = useHistory();

    const handleGoBack = () => {
        history.goBack();
    };

    return (
        <StyledNavigation>
            <StyledNavList>
                <StyledNavItem><StyledButton onClick={handleGoBack}><GoArrowLeft /></StyledButton></StyledNavItem>
                <StyledNavItem><StyledNavLink to={toTasks()}>Zadania</StyledNavLink></StyledNavItem>
                <StyledNavItem><StyledNavLink to={toAuthor()}>O autorze</StyledNavLink></StyledNavItem>
            </StyledNavList>
        </StyledNavigation>
    );
};

export default Navigation;