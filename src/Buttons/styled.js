import styled from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 767px){
        flex-direction: column
    }
`;

export const Button = styled.button`
    background: transparent;
    color: teal;
    margin: 0 0 0 20px;
    border: none;
    transition: color 0.5s;

    @media (max-width: 767px){
        margin: 10px;
    }

    &:hover{
        opacity: 80%;
        cursor: pointer;
    }

    &:disabled{
        color: gray;
    }
`;