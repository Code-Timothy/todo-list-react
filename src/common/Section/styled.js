import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.colors.white};
    margin: 5px;
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;
    padding: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.alto};
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    margin: 0;
`;

export const Content = styled.div`
    padding: 20px;
`;
