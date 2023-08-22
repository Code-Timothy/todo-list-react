import styled from "styled-components";

export const StyledTile = styled.div`
    margin-top: 10px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.gallery};

    @media(max-width: 768px){
        flex-direction: column;
        gap: 20px;
    }
`;

export const StyledHeader = styled.h2`
    align-self: flex-start;
    margin: 0;
`;