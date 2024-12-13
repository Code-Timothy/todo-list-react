import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: white;
    margin: 5px;
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;
    padding: 20px;
    border-bottom: 1px solid #ddd;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px){
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    margin: 0;
`;

export const Content = styled.div`
    padding: 20px;
`;
