import { StyledTile, StyledHeaderContainer, StyledHeader } from "./styled";

const Tile = ({ title, extraHeaderContent, body }) => (
    <StyledTile>
        <StyledHeaderContainer>
            <StyledHeader>{title}</StyledHeader>
            {extraHeaderContent}
        </StyledHeaderContainer>
        {body}
    </StyledTile>
);

export default Tile;